import { Category, ApiResponse } from "./types";

const BASE_URL = "https://swapi.dev/api/";

export const fetchData = async (
  category: Category,
  id: string
): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}${category}/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
