import { ProductCard } from '@components';

export const ProductCardWrapper = () => {
  return (
    <ProductCard
      image="path/to/image.jpg"
      title="Product Title"
      description="Product Description"
      price="99"
      onAddToCart={() => {}}
    />
  );
};
