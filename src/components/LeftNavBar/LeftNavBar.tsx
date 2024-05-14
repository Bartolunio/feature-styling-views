import styles from './LeftNavBar.module.css';

export const LeftNavBar = () => {
  return (
    <>
      <section className={styles.contentLeftSite}>
        <button>HOME</button>
        <button>FAQS</button>
        <button>BLOG</button>
        <button>CONTACT US</button>
        <button>BUY THEME</button>
      </section>
    </>
  );
};

export default LeftNavBar;
