import { create } from 'zustand';
import { Product } from '@shared-types/types';
import {
  addToCart as apiAdd,
  removeFromCart as apiRemove,
  clearCart as apiClearCart,
} from '@api/cart';
import { apiClient } from '@api/client';

type CartItem = {
  id?: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  loadCart: () => Promise<void>;
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>; // <- NEW
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  setCartItems: (items) => set({ cartItems: items }),

  loadCart: async () => {
    const res = await apiClient.get('/items'); // Corrected endpoint
    set({ cartItems: res.data });
  },

  addToCart: async (product: Product) => {
    await apiAdd(product);
    await get().loadCart();
  },

  removeFromCart: async (id: string) => {
    await apiRemove(id);
    await get().loadCart(); // Refresh cart after removing
  },

  clearCart: async () => {
    await apiClearCart();
    await get().loadCart(); // Refresh after clearing
  },
}));
