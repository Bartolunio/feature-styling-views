import styles from './Card.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineEye } from 'react-icons/hi';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Card: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Błąd pobierania danych:', error);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.title} className={styles.img} />
          <div className={styles.cardBody}>
            <h2>{product.title}</h2>
            <p className='price'>${product.price}</p>
           
              <HiOutlineEye className={styles.eye} />
              <button className={styles.buttonAdd}>ADD TO CART</button>
         

            {/* <p>{product.description}</p> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
