import styles from './LeftNavBar.module.css';

export const LeftNavBar = () => {
  return (
    <>
      <section className={styles.contentLeftSite}>
        <li>HOME</li>
        <li>FAQS</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
        <li>BUY THEME</li>
      </section>
    </>
  );
};

export default LeftNavBar;
