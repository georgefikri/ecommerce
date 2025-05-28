import React from 'react';
import styles from './Header.module.css';
import { useCartStore } from '../store/useCartStore';

type HeaderProps = {
  cartItemCount: number;
};

const Header = ({ cartItemCount }: HeaderProps) => {
  const cartItems = useCartStore((s) => s.cartItems);
  console.log('cartItems zustand', cartItems);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>🛍️ MyShop</div>
      <div className={styles.cart}>
        🛒 Cart
        <span className={styles.cartBadge}>{cartItems?.length}</span>
      </div>
    </header>
  );
};

export default Header;
