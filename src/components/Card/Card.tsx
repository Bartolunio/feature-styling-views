import styles from './Card.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          <img src={product.image} alt={product.title} />
          <div className='card-body'>
            <h2>{product.title}</h2>
            <p className='price'>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
// async function fetchData(): Promise<any[]> {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     return response.data;
//   } catch (error) {
//     console.error('Błąd pobierania danych:', error);
//     return [];
//   }
// }
// fetchData()
//   .then((data) => {
//     console.log('Otrzymane dane:', data);
//   })
//   .catch((error) => {
//     console.error('Błąd:', error);
//   });

// import styles from './Card.module.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

// const Card: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     axios
//       .get<Product[]>('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Błąd pobierania danych:', error);
//       });
//   }, []);

//   return (
//     <>
//       {products.map((product) => (
//         <div key={product.id} className={styles.card}>
//           <img src={product.image} alt={product.title} />
//           <div className='card-body'>
//             <h2>{product.title}</h2>
//             <p className='price'>${product.price}</p>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;
