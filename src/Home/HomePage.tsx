import { useState, useEffect } from 'react';

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
  const [filteredItems, setFilteredItems] = useState([]);

  const products = useFetchProducts();

  useEffect(() => {
    if (products.length > 0) {
      setItems(products);
      setFilteredItems(products);
    }
  }, [products]);

  return (
    <>
      <div className='App'>
        <div className='container'>
          <NavBar />
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
          <Card products={filteredItems} />
          <Blog />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
