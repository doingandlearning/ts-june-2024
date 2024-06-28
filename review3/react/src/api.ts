import { Category, ApiResponse } from "./types";

export const fetchData = async (
  category: Category,
  id: string,
  searchQuery = ""
): Promise<ApiResponse> => {
  const baseUrl = `https://swapi.dev/api/${category}/`;
  const url = searchQuery
    ? `${baseUrl}?search=${encodeURIComponent(searchQuery)}`
    : `${baseUrl}${id}/`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
