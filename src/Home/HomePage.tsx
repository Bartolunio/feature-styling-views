import { useState, useEffect, useRef } from 'react';

import NavBar from '@components/NavBar';
import SearchBar from '@components/SearchBar';
import ShoppingTools from '@components/ShoppingTools';
import Card from '@components/Card';
import CategoryItem from '@components/CategoryItem';
import Blog from '@components/Blog';
import Footer from '@components/Footer';
import useFetchProducts from '../components/CardService';

import logo from '../assets/Logo.png';
import '../App.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const products = useFetchProducts();
  const blogRef = useRef<HTMLElement>(null);

  const handleBlogClick = () => {
    blogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (products.length > 0) {
      setItems(products);
      setFilteredItems(products);
    }
  }, [products]);

  const handleAddToCart = (products) => {
    setCart([...cart, products]);
  };

  return (
    <>
      <div className='App'>
        <div className='container'>
          <NavBar handleClick={handleBlogClick} />
          <div className='header-main-section'>
            <div className='search-area'>
              <div className='search-input'>
                <SearchBar
                  product={items}
                  setFilteredItems={setFilteredItems}
                />
              </div>
            </div>
            <img src={logo} alt='logo' className='logoArea'></img>
            <ShoppingTools />
          </div>
          <CategoryItem />
          <Card
            products={filteredItems}
            product={products}
            onAddToCart={handleAddToCart}
          />
          <Blog ref={blogRef} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
