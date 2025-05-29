import React from 'react';
import { ProductCardProps } from './types';
import styles from './ProductCard.module.scss';

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  onAddToCart,
  disabled = false,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrapper}>
        <img src={image} alt={title} className={styles.productImage} />
        <div className={styles.floatingDescription}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productPrice}>{price}€</p>
      <button onClick={onAddToCart} className={styles.addToCartButton}>
        {disabled ? 'Already in Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
