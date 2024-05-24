import styles from './LeftNavBar.module.css';

export const LeftNavBar = () => {
  const relode = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className={styles.contentLeftSite}>
        <a onClick={relode}>HOME</a>
        <a href='#'>FAQS</a>
        <a href='#'>BLOG</a>
        <a href='#'>CONTACT US</a>
        <a href='#'>BUY THEME</a>
      </section>
    </>
  );
};

export default LeftNavBar;
