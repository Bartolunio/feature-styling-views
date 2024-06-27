import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoArrowBackSharp } from 'react-icons/io5';
import styles from './NavBar.module.css';
import SearchBar from '@components/SearchBar';
import ShoppingTools from '@components/ShoppingTools/ShoppingTools';

const NavBar = ({ handleBlogClick, product, setFilteredItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const overload = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const handleLoginClick = () => {
    navigate('/login-register');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.containerNavBar}>
      <div className={styles.navigation}>
        <section className={styles.contentLeftSite}>
          <Link to='/' onClick={overload}>
            HOME
          </Link>
          <Link to='/FAQS'>FAQS</Link>
          <button onClick={handleBlogClick}>BLOG</button>
          <Link to='/ContactUs'>CONTACT US</Link>
        </section>
        <section className={styles.contentRightSite}>
          <div className={styles.contentLogin} onClick={handleLoginClick}>
            <div>
              <FiLogIn />
            </div>
            <Link to='' className={styles.login}>
              LOGIN / REGISTER
            </Link>
          </div>
          <div className={styles.contentSociety}>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaPinterestP />
            </button>
          </div>
        </section>
        <button className={styles.hamburger} onClick={handleMenuToggle}>
          <RxHamburgerMenu />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeMenu} onClick={handleMenuToggle}>
            <IoArrowBackSharp />
          </button>
          <SearchBar product={product} setFilteredItems={setFilteredItems} />
          <ShoppingTools />
          <Link to='/' onClick={overload}>
            HOME
          </Link>
          <Link to='/FAQS'>FAQS</Link>
          <button onClick={handleBlogClick}>BLOG</button>
          <Link to='/ContactUs'>CONTACT US</Link>
          <div className={styles.mobileLogin} onClick={handleLoginClick}>
            <FiLogIn />
            <Link to='' className={styles.login}>
              LOGIN / REGISTER
            </Link>
          </div>
          <div className={styles.mobileSociety}>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaPinterestP />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
