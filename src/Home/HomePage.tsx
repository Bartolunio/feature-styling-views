import { useState, useEffect } from 'react';

import LeftNavBar from '@components/LeftNavBar';
import RightNavBar from '@components/RigtNavBar';
import SearchBar from '@components/SearchBar';
import ShoppingTools from '@components/ShoppingTools';
import Card from '@components/Card';
import Carousel from '@components/Carousel';
import CategoryItem from '@components/CategoryItem';
import Blog from '@components/Blog';
import Footer from '@components/Footer';
import useFetchProducts from '../components/CardService';

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
          <nav className='container-navBar'>
            <div className='left-navBar'>
              <LeftNavBar />
            </div>
          </nav>
          <div className='header-main-section'>
            <div className='search-area'>
              <div className='search-input'>
                <SearchBar
                  product={items}
                  setFilteredItems={setFilteredItems}
                />
              </div>
            </div>
            <div className='logo-area'></div>
            <div className='header-tools'>
              <ShoppingTools />
            </div>
          </div>
          <div className='container-slider'>
            <Carousel />
          </div>
          <section className='product-category'>
            <CategoryItem />
          </section>
          <div className='container-selling-item'>
            <h1 className='title-selling-items'>Best Selling Products</h1>
            <div className='card-selling-items'>
              <Card products={filteredItems} />
            </div>
          </div>
          <section className='container-blog-wrapper'>
            <h1 className='title-blog'>Latest news</h1>
            <Blog />
          </section>
          <footer className='container-fotter'>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
