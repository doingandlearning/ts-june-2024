import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useFetchWithCache from "./useFetchWithCache";
import { Category } from "../types";

import * as apiModule from "../api";

beforeEach(() => {
  vi.spyOn(apiModule, "fetchData").mockResolvedValue({ result: "data" });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useFetchWithCache", () => {
  // Clean up after each test
  afterEach(cleanup);

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFetchWithCache());

    const {
      category,
      setCategory,
      id,
      setId,
      searchQuery,
      setSearchQuery,
      data,
      error,
      handleFetch,
    } = result.current;

    expect(category).toBe(Category.People);
    expect(id).toBe("1");
    expect(searchQuery).toBe("");
    expect(data).toBeNull();
    expect(error).toBe("");
    expect(typeof handleFetch).toBe("function");

    // // Test setters
    act(() => {
      setCategory(Category.Planets);
      setId("2");
      setSearchQuery("test");
    });

    expect(result.current.category).toBe(Category.Planets);
    expect(result.current.id).toBe("2");
    expect(result.current.searchQuery).toBe("test");
  });

  it("should update data and cache on successful fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchWithCache());

    // Perform a fetch
    act(() => {
      result.current.handleFetch();
    });

    await waitForNextUpdate();

    expect(apiModule.fetchData).toHaveBeenCalledWith(Category.People, "1", "");
    expect(result.current.data).toEqual({ result: "data" });
    expect(result.current.error).toBe("");
  });

  it("should handle fetch error", async () => {
    // Mock fetchData function to throw an error
    vi.spyOn(apiModule, "fetchData").mockRejectedValue(
      new Error("Fetch error")
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetchWithCache());

    // Perform a fetch that results in an error
    act(() => {
      result.current.handleFetch();
    });

    await waitForNextUpdate();

    // Update the references to data and error after the state update
    const { data, error } = result.current;

    expect(apiModule.fetchData).toHaveBeenCalledWith(Category.People, "1", "");
    expect(data).toBeNull();
    expect(error).toBe("Failed to fetch data");

    // Restore the mock after the test
    vi.restoreAllMocks();
  });

  it("should use cached data if available", async () => {
    // Mock fetchData function
    vi.spyOn(apiModule, "fetchData");

    const { result } = renderHook(() => useFetchWithCache());

    // Set some data in the cache
    act(() => {
      const cacheKey = `${Category.People}/1/`; // Ensure this matches the key generation in your hook
      result.current.setCache(
        new Map().set(cacheKey, { cachedData: "cached" })
      );
    });

    // Perform a fetch
    act(() => {
      result.current.handleFetch();
    });

    // Ensure fetchData was not called
    expect(apiModule.fetchData).not.toHaveBeenCalled();

    // Ensure the cached data is used
    expect(result.current.data).toEqual({ cachedData: "cached" });

    // Restore the mock after the test
    vi.restoreAllMocks();
  });
});
