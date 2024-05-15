import './App.css';
import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import RightNavBar from './components/RigtNavBar/RightNavBar';
import SearchBar from './components/SearchBar/SearchBar';
import ShoppingTools from './components/ShoppingTools/ShoppingTools';
import Navigation from './components/Navigation/Navigation';
import CategoryItem from './components/CategoryItem/CategoryItem';
function App() {
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

          <div className='container-slider'></div>

          <section className='product-category'>
            <CategoryItem />
          </section>

          <div className='container-selling-item'>
            <h1 className='title-selling-items'>Best Selling Products</h1>
            <div className='card-selling-items'>
              <div className='card'>1</div>
              <div className='card'>2</div>
              <div className='card'>3</div>
              <div className='card'>4</div>
              <div className='card'>5</div>
              <div className='card'>6</div>
              <div className='card'>7</div>
              <div className='card'>8</div>
              <div className='card'>9</div>
              <div className='card'>10</div>
              <div className='card'>11</div>
              <div className='card'>12</div>
            </div>
          </div>

          <section className='container-blog-wrapper'>
            <h1 className='title-blog'>Latest news</h1>
            <div className='content-blog-wrapper'>
              <div className='shop founder'>1</div>
              <div className='offers '>2</div>
              <div className='coming soon'>3</div>
            </div>
          </section>

          <footer className='container-fotter'>stopka</footer>
        </div>
      </div>
    </>
  );
}

export default App;
