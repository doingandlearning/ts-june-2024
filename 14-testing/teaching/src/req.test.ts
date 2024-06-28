import fakeFetch from "./req-promise";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("responds with data", async () => {
  const responsePromise = fakeFetch("https://bbc.com");
  vi.runAllTimers();
  const response = await responsePromise;
  expect(Buffer.isBuffer(response)).toBe(true);
  expect(response.toString()).toMatchSnapshot();
});

test("unhappy path for fakeFetch", async () => {
  const responsePromise = fakeFetch("http://error.com");
  vi.runAllTimers();
  await expect(responsePromise).rejects.toThrow("network error");

  try {
    const responsePromise = fakeFetch("http://error.com");
    vi.runAllTimers();
    await expect(responsePromise).rejects.toThrow("network error");
    const response = await responsePromise;
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toMatchInlineSnapshot(`[Error: network error]`);
  }
});
