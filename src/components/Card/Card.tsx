import { useState } from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { useCart } from '@components/CartContext/CartContext';
import styles from './Card.module.css';
import { Product } from '@components/CardService/types';

type CartProps = {
  products: Product[];
};

const Card = ({ products }: CartProps) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleEyeClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      handleCloseModal();
    }
  };

  return (
    <>
      <h1 className={styles.titleSellingItems}>Best Selling Products</h1>
      <div className={styles.containerSellingItems}>
        {products.map((product) => (
          <div key={product.id}>
            <div className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.cardBody}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>${product.price}</p>
                <HiOutlineEye
                  className={styles.eye}
                  onClick={() => handleEyeClick(product)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Price: ${selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
            <p>Category: {selectedProduct.category}</p>
            <button onClick={handleCloseModal}>Close</button>
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
        </div>
      )}
      {selectedProduct && (
        <div className={styles.backdrop} onClick={handleCloseModal} />
      )}
    </>
  );
};

export default Card;
