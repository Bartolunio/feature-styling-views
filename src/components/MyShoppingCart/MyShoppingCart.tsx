import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { IoArrowBackSharp } from 'react-icons/io5';
import styles from './MyShoppingCart.module.css';
import { useNavigate } from 'react-router-dom';
const MyShoppingCart = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const initialQuantities = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
  };

  const [quantities, setQuantities] = useState(initialQuantities);

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => {
      if (prevQuantities[id] > 1) {
        return {
          ...prevQuantities,
          [id]: prevQuantities[id] - 1,
        };
      }
      return prevQuantities;
    });
  };

  const products = [
    { id: 1, name: 'Product 1', price: 1510 },
    { id: 2, name: 'Product 1', price: 1550 },
    { id: 3, name: 'Product 2', price: 110 },
    { id: 4, name: 'Product 3', price: 120 },
    { id: 5, name: 'Product 4', price: 150 },
    { id: 6, name: 'Product 5', price: 10 },
  ];

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
        <p>Value of products: 20129 $</p>
      </div>
      <div className={styles.shoppingCart}>
        {products.map((product) => (
          <div key={product.id} className={styles.shoppingCartItems}>
            <div className={styles.productContent}>
              <span>
                <RiCloseFill />
              </span>
              <img className={styles.productImage} />
              <h2>{product.name}</h2>
              <div className={styles.quantityControl}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleDecrease(product.id)}
                >
                  -
                </button>
                <span>{quantities[product.id]}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleIncrease(product.id)}
                >
                  +
                </button>
              </div>
              <p className={styles.productPrice}>
                {'Total Price'}: ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShoppingCart;
