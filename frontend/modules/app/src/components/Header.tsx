import React, { useState } from 'react';
import styles from '@styles/Header.module.css';
import { useCartStore } from '@store/useCartStore';
import CartIcon from '@icons/CartIcon';
import TrashIcon from '@icons/TrashIcon';

const Header = () => {
  const cartItems = useCartStore((s) => s.cartItems);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>🛍️ MyShop</div>
      <div className={styles.cart} onClick={toggleDropDown}>
        <CartIcon className={styles.cartIcon} /> Cart
        <span className={styles.cartBadge}>{cartItems?.length}</span>
        {isOpen && (
          <div className={styles.dropdown}>
            {cartItems.length === 0 ? (
              <div className={styles.empty}>Cart is empty</div>
            ) : (
              <ul className={styles.cartList}>
                {cartItems.map((item) => (
                  <li key={item.itemId} className={styles.cartItem}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemQuantity}>
                        ×{item.quantity}
                      </span>
                    </div>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id ?? item.itemId)}
                    >
                      <TrashIcon className={styles.trashIcon} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
