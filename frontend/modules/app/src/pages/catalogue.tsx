import { clearCart } from '../api/cart';
import { ProductCardWrapper } from '../features/catalogue/components/ProductCardWrapper';
import { Product } from '../types/types';
import { useEffect } from 'react';

type CatalogueProps = {
  products: Product[];
  cartItems: any;
};

export function Catalogue({ products, cartItems }: CatalogueProps) {
  console.log('cartItems', cartItems);

  return (
    <>
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
