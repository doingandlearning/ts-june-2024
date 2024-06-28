// useFetchWithCache.js
import { useState } from "react";
import { Category, ApiResponse } from "../types";
import { fetchData } from "../api";

const useFetchWithCache = () => {
  const [category, setCategory] = useState<Category>(Category.People);
  const [id, setId] = useState<string>("1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [cache, setCache] = useState(new Map<string, ApiResponse>());

  const handleFetch = async () => {
    const cacheKey = `${category}/${id}/${searchQuery}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      setData(cachedData);
      setError("");
      return;
    }

    try {
      const result = await fetchData(category, id, searchQuery);
      setCache(new Map(cache.set(cacheKey, result)));
      setData(result);
      setError("");
    } catch (err) {
      setData(null);
      setError("Failed to fetch data");
    }
  };

  return {
    category,
    setCache,
    setCategory,
    id,
    setId,
    searchQuery,
    setSearchQuery,
    data,
    error,
    handleFetch,
  };
};

export default useFetchWithCache;
