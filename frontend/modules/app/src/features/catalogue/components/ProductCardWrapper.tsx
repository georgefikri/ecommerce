import { ProductCard } from '@components';
import { Product } from 'modules/app/src/types/types';
import { addToCart, removeFromCart } from '../../../api/cart';

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
  const isInCart = cartItems.some((item) => item.itemId === product.sku);

  const handleAddToCart = async () => {
    if (isInCart) return;

    try {
      await addToCart(product);
      console.log('item added to cart');
      onItemAdded?.();
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  // const handleRemoveFromCart = async () => {
  //   try {
  //     await removeFromCart(product.sku);
  //     console.log('item removed from cart');
  //     onItemAdded?.();
  //   } catch (error) {
  //     console.error('Failed to remove product from cart:', error);
  //   }
  // };

  return (
    <div style={{ position: 'relative' }}>
      <ProductCard
        image={product.imageUrl}
        title={product.name}
        description={product.description}
        price={product.price.toString()}
        onAddToCart={handleAddToCart}
        disabled={isInCart}
      />
      {/* {isInCart && (
        <button
          onClick={handleRemoveFromCart}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: '4px 8px',
            fontSize: '12px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Remove
        </button>
      )} */}
    </div>
  );
};
