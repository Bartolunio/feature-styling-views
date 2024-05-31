import styles from './Footer.module.css';
import Phone from '@assets/telefon.jpg';
import flashDisck from '@assets/pendrive.jpg';
import Laptop from '@assets/laptop.jpg';
import Patrimony from '@assets/zeg1.jpg';
import Montbrilliant from '@assets/zeg2.webp';
import Brliant from '@assets/zeg3.jpg';

const Footer = () => {
  return (
    <>

      <footer className={styles.containerFotter}>
        <div className={styles.contentFooter}>
          <div className={styles.companyLogo}>
            <div className={styles.logo}></div>
            <p className={styles.information}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              maiores iste, vel nulla doloribus, maxime ipsum dolorem vero quo
              non soluta velit
            </p>
          </div>
          <div className={styles.latestProducts}>
            <h1 className={styles.titlearticle}>LATEST PRODUCTS</h1>
            <div className={styles.contentLastProducts}>
              <img src={Phone} className={styles.image} />
              <div className={styles.info}>
                <h1 className={styles.title}>Phone</h1>
                <p className={styles.price}> $2000</p>
              </div>
            </div>
            <div className={styles.contentLastProducts}>
              <img src={flashDisck} className={styles.image} />
              <div className={styles.info}>
                <h1 className={styles.title}>Flash drive</h1>
                <p className={styles.price}>$100</p>
              </div>
            </div>
            <div className={styles.contentLastProducts}>
              <img src={Laptop} className={styles.image} />
              <div className={styles.info}>
                <h1 className={styles.title}>Phone</h1>
                <p className={styles.price}>$2000</p>
              </div>
            </div>
          </div>

          <div className={styles.bestSeller}>
            <h1 className={styles.titlearticle}>TOP RATED PRODUCTS</h1>
            <div className={styles.contentbestSeller}>
              <img src={Patrimony} className={styles.image} />
              <div className={styles.info}>
                <h1 className={styles.title}>Patrimony Ultra Calibre</h1>
                <p className={styles.price}>$8400</p>
              </div>
            </div>
            <div className={styles.contentbestSeller}>
              <img src={Montbrilliant} className={styles.image} />
              <div className={styles.info}>
                <h1 className={styles.title}>Montbrilliant</h1>
                <p className={styles.price}>$5050</p>
              </div>
            </div>
            <div className={styles.contentbestSeller}>
              <img src={Brliant} className={styles.image} />
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
              <p>Porro fugiat enim, aperiam facere recusandae suscipit.</p>
              <p>
                Voluptatum rem exercitationem excepturi sunt fugit quas
                possimus.
              </p>
            </div>
          </div>
        </div>{' '}
      </footer>
    </>
  );
};

export default Footer;
