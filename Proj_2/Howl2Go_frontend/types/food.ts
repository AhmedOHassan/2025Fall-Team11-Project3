/**
 * @fileoverview Food type definitions
 * @description TypeScript types for food items and search results
 * @author Howl2Go Dev Team
 * @date 2025
 */

export interface mockSearchResults {
  [key: string]: string;
}
export interface FoodItem {
  restaurant: string;
  item: string;
  calories: number;
  caloriesFromFat?: number | null;
  totalFat?: number | null;
  saturatedFat?: number | null;
  transFat?: number | null;
  cholesterol?: number | null;
  sodium?: number | null;
  carbs?: number | null;
  fiber?: number | null;
  sugars?: number | null;
  protein?: number | null;
  weightWatchersPoints?: number | null;
  price?: number;
  iron?: number | null;
  potassium?: number | null;
  magnesium?: number | null;
  calcium?: number | null;
  vitaminA?: number | null;
  vitaminC?: number | null;
  vitaminD?: number | null;
}

export interface APIResponse {
  results?: FoodItem[];
  error?: string;
  message?: string;
}

export interface APIError {
  message: string;
  statusCode?: number;
}
