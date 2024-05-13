import styles from './RightNavBar.module.css';

export const RightNavBar = () => {
  return (
    <>
      <section className={styles.contentRightSite}>
        <>
          <div>icon</div>
          <button className={styles.login}>LOGIN/REGISTER</button>
        </>
        <div>
          <div>icon</div>
          <button className={styles.wishlist}>WISHLIST</button>
        </div>
        <div className={styles.contentSociety}>
          <button>ic</button>
          <button>ic</button>
          <button>ic</button>
        </div>
      </section>
    </>
  );
};

export default RightNavBar;
