import { apiClient } from './httpClient';
import { API_ENDPOINTS } from './apiEndpoints';
import { Product } from '@shared-types/types';

export async function addToCart(product: Product) {
  const payload = {
    itemId: product.sku,
    name: product.name,
    price: product.price,
    quantity: 1,
  };
  return apiClient.post(API_ENDPOINTS.cartItems, payload);
}

export async function removeFromCart(itemId: string) {
  const url = `${API_ENDPOINTS.cartItems}/${itemId}`;
  return apiClient.delete(url);
}

export async function clearCart() {
  try {
    const { data: items } = await apiClient.get<any[]>(API_ENDPOINTS.cartItems);
    await Promise.all(
      items.map((item) =>
        apiClient.delete(`${API_ENDPOINTS.cartItems}/${item.itemId}`)
      )
    );
    console.log('Cart cleared');
  } catch (error) {
    console.error('Failed to clear cart:', error);
  }
}
