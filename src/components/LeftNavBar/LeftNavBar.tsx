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
        <Link to='/FAQS'>FAQS</Link>
        <Link to='/Blog'>BLOG</Link>
        <Link to='/ContactUs'>CONTACT US</Link>
      </section>
    </>
  );
};

export default LeftNavBar;
