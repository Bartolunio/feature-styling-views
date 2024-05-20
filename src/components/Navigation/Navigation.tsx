import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.contentNavigation}>
      <a href='#'>Home</a>
      <a href='#'>Theme Feature</a>
      <a href='#'>Our Shop</a>
      <a href='#'>Blog</a>
      <a href='#'>Contact Us</a>
    </div>
  );
};

export default Navigation;
