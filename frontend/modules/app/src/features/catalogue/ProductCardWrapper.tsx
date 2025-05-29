import { ProductCard } from '@components';
import { Product } from 'modules/app/src/types/types';
import { addToCart } from '@api/cartActions';
import { useCartStore } from '@store/useCartStore';
import styles from '@styles/ProductCardWrapper.module.css';

type Props = {
  product: Product;
  onItemAdded?: () => void;
  cartItems: any[];
};
export const ProductCardWrapper = ({
  product,
  onItemAdded,
  cartItems,
}: Props) => {
  const loadCart = useCartStore((s) => s.loadCart);

  const isInCart = cartItems.some((item) => item.itemId === product.sku);

  const handleAddToCart = async () => {
    if (isInCart) return;

    try {
      await addToCart(product);
      await loadCart();
      console.log('item added to cart');
      onItemAdded?.();
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  return (
    <div className={styles.fixedHeightCard}>
      <ProductCard
        image={product.imageUrl}
        title={product.name}
        description={product.description}
        price={product.price.toString()}
        onAddToCart={handleAddToCart}
        disabled={isInCart}
      />
    </div>
  );
};
