import { useEffect } from 'react';
import { ProductCardWrapper } from '@features/catalogue/ProductCardWrapper';
import { CartItem, Product } from '@shared-types/types';
import { useCartStore } from '@store/useCartStore';
import { useApi } from '@api/useApi';
import { API_ENDPOINTS } from '@api/endpoints';

type CatalogueProps = {
  products: Product[];
};

export function Catalogue({ products }: CatalogueProps) {
  const setCartItems = useCartStore((s) => s.setCartItems);
  const cartItems = useCartStore((s) => s.cartItems);
  const clearCart = useCartStore((s) => s.clearCart);

  const { data } = useApi<CartItem[]>(API_ENDPOINTS.cartItems);

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data, setCartItems]);
  return (
    <>
      {/* TODO: remove classname and use css module */}
      <div className="grid">
        {products.map((product) => (
          <ProductCardWrapper
            key={product.sku}
            product={product}
            cartItems={cartItems}
          />
        ))}
      </div>
    </>
  );
}

export default Catalogue;
