import styles from './MyShoppingCart.module.css';

const MyShoppingCart = () => {
  return (
    <>
      <h1>My Shopping Cart</h1>
      <div className={styles.shoppingCart}>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 1</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $1510</p>
          </div>
        </div>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 1</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $1550</p>
          </div>
        </div>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 2</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $110</p>
          </div>
        </div>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 3</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $120</p>
          </div>
        </div>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 4</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $150</p>
          </div>
        </div>
        <div className={styles.shoppingCartItems}>
          <div className={styles.productContent}>
            <button className={styles.removeButton}>X</button>
            <img className={styles.productImage} />
            <h2>Product 5</h2>
            <div className={styles.quantityControl}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <p className={styles.productPrice}>Price: $10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyShoppingCart;
