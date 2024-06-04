import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { IoHeartOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import styles from './NavBar.module.css';

const NavBar = ({handleClick}) => {
  const navigate = useNavigate();
  const overload = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const handleLoginClick = () => {
    navigate('/login-register');
  };

  return (
    <div className={styles.containerNavBar}>
      <div className={styles.navigation}>
        <section className={styles.contentLeftSite}>
          <Link to='/' onClick={overload}>
            HOME
          </Link>
          <Link to='/FAQS'>FAQS</Link>
          <button onClick={handleClick}>BLOG</button>
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
          <div className={styles.contentWishList}>
            <div>
              <IoHeartOutline />
            </div>
            <Link to='' className={styles.wishlist}>
              WISHLIST
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
      </div>
    </div>
  );
};

export default NavBar;
