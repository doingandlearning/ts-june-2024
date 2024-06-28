export enum Category {
  People = "people",
  Planets = "planets",
  Species = "species",
  Starships = "starships",
  Vehicles = "vehicles",
}

export type ApiResponse = {
  // Define the structure based on SWAPI response
  // This is a generic type, you might need to adjust based on specific category
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
};
