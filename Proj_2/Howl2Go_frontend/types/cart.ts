/**
 * @fileoverview Cart type definitions
 * @description TypeScript types for shopping cart functionality
 * @author Howl2Go Dev Team
 * @date 2025
 */

import type { FoodItem } from "./food";

export interface CartItem {
  id: string; // Unique ID for cart item (not food item ID)
  foodItem: FoodItem;
  quantity: number;
  addedAt: Date;
  price: number; // Price per item (placeholder, can be calculated from calories or set manually)
}

export interface CartSummary {
  totalItems: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
}
