import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.contentNavigation}>
      <button>Home</button>
      <button>Theme Feature</button>
      <button>Our Shop</button>
      <button>Blog</button>
      <button>Contact Us</button>
    </div>
  );
};

export default Navigation;
