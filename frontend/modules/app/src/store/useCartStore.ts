/* import { create } from 'zustand';
import { Product } from '../types/types';
import { addToCart as apiAdd, removeFromCart as apiRemove } from '../api/cart';
import { apiClient } from '../api/client';

type CartItem = {
  id: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];
  loadCart: () => Promise<void>;
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  loadCart: async () => {
    const res = await apiClient.get('/carts/items');
    set({ cartItems: res.data });
  },

  addToCart: async (product: Product) => {
    await apiAdd(product);
    await get().loadCart();
  },

  removeFromCart: async (id: string) => {
    await apiRemove(id);
    await get().loadCart();
  },
}));
 */

import { create } from 'zustand';
import { Product } from '../types/types';
import { addToCart as apiAdd, removeFromCart as apiRemove } from '../api/cart';
import { apiClient } from '../api/client';

type CartItem = {
  id?: string; // made optional to reflect your real data
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
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  setCartItems: (items) => set({ cartItems: items }),

  loadCart: async () => {
    const res = await apiClient.get('/carts/items');
    set({ cartItems: res.data });
  },

  addToCart: async (product: Product) => {
    await apiAdd(product);
    await get().loadCart();
  },

  removeFromCart: async (id: string) => {
    await apiRemove(id);
    await get().loadCart();
  },
}));
