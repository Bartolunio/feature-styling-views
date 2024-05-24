import { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineEye } from 'react-icons/hi';
import styles from './Card.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Card = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Błąd pobierania danych:', error);
      });
  }, []);

  const handleEyeClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
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
      ))}
      {selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} />
            <p>Price: ${selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
            <p>Category: {selectedProduct.category}</p>
            <button onClick={handleCloseModal}>Close</button>
            <button onClick={handleCloseModal}>ADD TO CART</button>
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
