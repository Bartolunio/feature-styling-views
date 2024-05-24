import styles from './LeftNavBar.module.css';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
  const overload = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className={styles.contentLeftSite}>
        <Link to='/' onClick={overload}>
          HOME
        </Link>
        <Link to='/faqs'>FAQS</Link>
        <Link to='/Blog'>BLOG</Link>
        <Link to='/contact'>CONTACT US</Link>
        <Link to='/buy'>BUY THEME</Link>
      </section>
    </>
  );
};

export default LeftNavBar;
