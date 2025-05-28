import Catalogue from './catalogue';
import { GetServerSideProps } from 'next';
import { serverFetch } from '../api/server';
import { API_ENDPOINTS } from '../api/endpoints';
import { Product } from '../types/types';
import Header from '../components/Header';
import { useCartStore } from '../store/useCartStore';
import { useEffect } from 'react';

type IndexPageProps = {
  products: Product[];
  cartItems: any[];
};

export function Index({ products, cartItems }: IndexPageProps) {
  // const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const setCartItems = useCartStore((s) => s.setCartItems);

  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems, setCartItems]);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <Header cartItemCount={totalQuantity} />
      <Catalogue products={products} cartItems={cartItems} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await serverFetch<Product[]>(API_ENDPOINTS.products);
  const cartItems = await serverFetch<any[]>(API_ENDPOINTS.cartItems);
  return {
    props: {
      products,
      cartItems: cartItems,
    },
  };
};

export default Index;
