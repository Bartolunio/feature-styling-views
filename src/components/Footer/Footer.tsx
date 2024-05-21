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
            soluta velit
          </p>
        </div>

        <div className={styles.latestProducts}>
          <h1 className={styles.titlearticle}>LATEST PRODUCTS</h1>
          <div className={styles.contentLastProducts}>
            <div className={styles.imageLaptop}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Phone</h1>
              <p className={styles.price}> $2000</p>
            </div>
          </div>
          <div className={styles.contentLastProducts}>
            <div className={styles.imagePendrive}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Flash drive</h1>
              <p className={styles.price}>$100</p>
            </div>
          </div>
          <div className={styles.contentLastProducts}>
            <div className={styles.imagePhone}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Phone</h1>
              <p className={styles.price}>$2000</p>
            </div>
          </div>
        </div>

        <div className={styles.bestSeller}>
          <h1 className={styles.titlearticle}>TOP RATED PRODUCTS</h1>

          <div className={styles.contentbestSeller}>
            <div className={styles.imagePatrimony}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Patrimony Ultra Calibre</h1>
              <p className={styles.price}>$8400</p>
            </div>
          </div>

          <div className={styles.contentbestSeller}>
            <div className={styles.imageMontbrilliant}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Montbrilliant</h1>
              <p className={styles.price}>$5050</p>
            </div>
          </div>
          <div className={styles.contentbestSeller}>
            <div className={styles.imageBrliant}></div>
            <div className={styles.info}>
              <h1 className={styles.title}>Montbrilliant</h1>
              <p className={styles.price}>$2100</p>
            </div>
          </div>
        </div>

        <div className={styles.latestNews}>
          <h1 className={styles.titlearticle}>LATEST NEWS</h1>
          <div className={styles.contentLatestNews}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <p>Aliquam nisi assumenda voluptatem sint commodi blanditiis.</p>
            <p>porro fugiat enim, aperiam facere recusandae suscipit.</p>
            <p>
              Voluptatum rem exercitationem excepturi sunt fugit quas possimus,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
