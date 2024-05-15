import { useEffect, useState } from 'react';
import axios from 'axios';
import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import RightNavBar from './components/RigtNavBar/RightNavBar';
import SearchBar from './components/SearchBar/SearchBar';
import ShoppingTools from './components/ShoppingTools/ShoppingTools';
import Navigation from './components/Navigation/Navigation';
import CategoryItem from './components/CategoryItem/CategoryItem';
import Blog from './components/Blog/Blog';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

import './App.css';

function App() {
  const [data, setData] = useState();

  ///---------- API ----------  /////
  const url = `https://fakestoreapi.com/products`;

  ///---------- Ustawianie nasłuchiwnia na input ----------  /////

  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [url]);

  return (
    <>
      <div className='App'>
        <div className='container'>
          <nav className='container-navBar'>
            <div className='left-navBar'>
              <LeftNavBar />
            </div>
            <div className='right-navBar'>
              <RightNavBar />
            </div>
          </nav>

          <div className='header-main-section'>
            <div className='search-area'>
              <div className='search-input'>
                <SearchBar />
              </div>
            </div>

            <div className='logo-area'></div>

            <div className='header-tools'>
              <ShoppingTools />
            </div>
          </div>

          <div className='container-main-navigation'>
            <nav className='navigation-menu'>
              <Navigation />
            </nav>
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
              <Card product={data} />
            </div>
          </div>

          <section className='container-blog-wrapper'>
            <h1 className='title-blog'>Latest news</h1>
            <Blog />
          </section>

          <footer className='container-fotter'>stopka</footer>
        </div>
      </div>
    </>
  );
}

export default App;
// const [loading, setLoading] = useState(false);
// const [data, setData] = useState([]);

// useEffect(() => {
//   axios({
//     method: 'GET',
//     url: 'https://fakestoreapi.com/products',
//   })
//     .then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     })
//     .catch((e) => console.log(e))
//     .finally(() => setLoading(false));
// }, []);
