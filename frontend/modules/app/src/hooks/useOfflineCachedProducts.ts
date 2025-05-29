import { use, useEffect, useState } from 'react';
import { Product } from '@shared-types/types';

const LOCAL_STORAGE_KEY = 'cachedProducts';

export function useOfflineCachedProducts(initialProducts: Product[]) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    if (initialProducts?.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialProducts));
    }
  }, [initialProducts]);

  useEffect(() => {
    if (!navigator.onLine) {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Product[];
          setProducts(parsed);
        } catch (error) {}
      }
    }
  }, []);

  return products;
}
