import styles from './LeftNavBar.module.css';

export const LeftNavBar = () => {
  return (
    <>
      <section className={styles.contentLeftSite}>
        <a href='#'>HOME</a>
        <a href='#'>FAQS</a>
        <a href='#'>BLOG</a>
        <a href='#'>CONTACT US</a>
        <a href='#'>BUY THEME</a>
      </section>
    </>
  );
};

export default LeftNavBar;