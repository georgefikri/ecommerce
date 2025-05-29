import { useEffect } from 'react';
import { ProductCardWrapper } from '@features/catalogue/ProductCardWrapper';
import { CartItem, Product } from '@shared-types/types';
import { useCartStore } from '@store/useCartStore';
import { useApi } from '@hooks/useApiClient';
import { API_ENDPOINTS } from '@api/apiEndpoints';
import styles from '@styles/catalogue.module.css';
import { useOfflineCachedProducts } from '@hooks/useOfflineCachedProducts';

type CatalogueProps = {
  products: Product[];
};

export function Catalogue({ products }: CatalogueProps) {
  const setCartItems = useCartStore((s) => s.setCartItems);
  const cartItems = useCartStore((s) => s.cartItems);
  const { data } = useApi<CartItem[]>(API_ENDPOINTS.cartItems);

  const cachedProducts = useOfflineCachedProducts(products);

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data, setCartItems]);
  return (
    <>
      <div className={styles.catalogueFlex}>
        {cachedProducts.map((product) => (
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
