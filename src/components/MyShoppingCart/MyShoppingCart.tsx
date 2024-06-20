import { IoArrowBackSharp } from 'react-icons/io5';
import styles from './MyShoppingCart.module.css';
import { useCart } from '@components/CartContext/CartContext';
const MyShoppingCart = () => {
  const { cart } = useCart();

  const handleGoBack = () => {
    window.history.back();
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

      <div className={styles.totalAmount}>
        <p>Value of products: ${totalAmount.toFixed(2)}</p>
      </div>

      <div className={styles.shoppingCart}>
        {cart.length === 0 ? (
          <p>Twój koszyk jest pusty</p>
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
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyShoppingCart;
{
  /* <div key={product.id} className={styles.shoppingCartItems}>
<div className={styles.productContent}>
  <span>
    <RiCloseFill />
  </span>
  <img
    src={product.image}
    alt={product.name}
    className={styles.productImage}
  />
  <h2>{product.name}</h2>
  <div className={styles.quantityControl}>
    <button
      className={styles.quantityButton}
      // onClick={() => handleDecrease(product.id)}
    >
      -
    </button>
    <span>quanitities</span>
    <button className={styles.quantityButton}>+</button>
  </div>
  <p className={styles.productPrice}>
    {'Total Price'}: ${product.price}
  </p>
</div>
</div> */
}
