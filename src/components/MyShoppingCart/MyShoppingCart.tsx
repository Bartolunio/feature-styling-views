import { IoArrowBackSharp } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '@components/CartContext/CartContext';
// import { useState } from 'react';

import styles from './MyShoppingCart.module.css';

const MyShoppingCart = () => {
  const {
    cart,
    removeFromCart,
    updateCartItemQuantity,
    totalAmount,
    quantities,
  } = useCart();

  // const [quantities, setQuantities] = useState<{ [key: number]: number }>(
  //   cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
  // );

  const handleGoBack = () => {
    window.history.back();
  };

  // const handleRemoveItem = (id: number) => {
  //   removeFromCart(id);
  //   const newQuantities = { ...quantities };
  //   delete newQuantities[id];
  //   setQuantities(newQuantities);
  // };

  // const handleQuantityChange = (id: number, change: number) => {
  //   const newQuantity = Math.max(1, quantities[id] + change);
  //   setQuantities({ ...quantities, [id]: newQuantity });
  //   updateCartItemQuantity(id, newQuantity);
  // };

  // const totalAmount = cart.reduce(
  //   (total, item) => total + item.price * quantities[item.id],
  //   0
  // );

  return (
    <div className={styles.content}>
      <div className={styles.navigate}>
        <IoArrowBackSharp
          onClick={handleGoBack}
          className={styles.handleGoBack}
        />
        <h1 className={styles.title}>My Shopping Cart</h1>
      </div>
      <div className={styles.contentCart}>
        <div className={styles.shoppingCart}>
          {cart.map((product) => (
            <div key={product.id} className={styles.shoppingCartItems}>
              <div className={styles.productContent}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
                <h2>{product.title}</h2>
                <div className={styles.quantityControl}>
                  <button
                    onClick={() => updateCartItemQuantity(product.id, -1)}
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button onClick={() => updateCartItemQuantity(product.id, 1)}>
                    +
                  </button>
                </div>
                <span className={styles.productPrice}>
                  ${(product.price * quantities[product.id]).toFixed(2)}
                </span>
                <div
                  className={styles.trash}
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          ))}
          <div className={styles.cartTotal}>
            <h1>Cart Totals</h1>
            <p>Subtotal</p>
            <p>${totalAmount.toFixed(2)}</p>
            {cart.length > 0 ? (
              <Link to='/billingDetails'>
                <button className={styles.btnCheckaut}>
                  Proceed to checkout
                </button>
              </Link>
            ) : (
              <button
                className={`${styles.btnCheckaut} ${styles.disabled}`}
                disabled
              >
                Proceed to checkout
              </button>
            )}
            {cart.length === 0 && (
              <p className={styles.errorMessage}>
                Your cart is empty. Add items to proceed to checkout.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShoppingCart;
