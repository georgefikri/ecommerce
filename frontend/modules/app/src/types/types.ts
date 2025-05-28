export interface Product {
  sku: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  quantity: number;
}

export interface CartItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
}
