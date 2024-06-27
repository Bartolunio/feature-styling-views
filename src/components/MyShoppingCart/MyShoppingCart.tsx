import { IoArrowBackSharp } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';

import { useCart } from '@components/CartContext/CartContext';

import styles from './MyShoppingCart.module.css';

const MyShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

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
          {cart.length === 0 ? (
            <p>Your shopping cart is empty</p>
          ) : (
            cart.map((product, index) => (
              <div key={index} className={styles.shoppingCartItems}>
                <div className={styles.productContent}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <h2>{product.title}</h2>
                  <div className={styles.quantityControl}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <span className={styles.productPrice}>
                    ${product.price.toFixed(2)}
                  </span>
                  <div
                    className={styles.trash}
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    <FaTrash />
                  </div>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <div className={styles.cartTotal}>
              <h1>Cart Totals</h1>
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
              <button className={styles.btnCheckaut}>
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyShoppingCart;
