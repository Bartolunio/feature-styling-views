import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.contentFooter}>
        <div className={styles.companyLogo}>
          <div className={styles.logo}></div>
          <p className={styles.information}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            maiores iste, vel nulla doloribus, maxime ipsum dolorem vero quo non
            soluta velit officiis recusandae est natus quisquam doloremque,
            ipsam quos.
          </p>
        </div>

        <div className={styles.latestProducts}>
          <h1 className={styles.titleContent}>LATEST PRODUCTS</h1>

          <div className={styles.contentLastProducts}>
            <div className={styles.imageLaptop}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>gasignai</h1>
              <p className={styles.price}>200</p>
            </div>
          </div>

          <div className={styles.contentLastProducts}>
            <div className={styles.imagePendrive}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>agsasga</h1>
              <p className={styles.price}>960</p>
            </div>
          </div>

          <div className={styles.contentLastProducts}>
            <div className={styles.imageRing}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>gaserthje2ignai</h1>
              <p className={styles.price}>2100</p>
            </div>
          </div>
        </div>

        <div className={styles.bestSeller}></div>
        <div className={styles.latestNews}></div>
      </div>
    </>
  );
};

export default Footer;
