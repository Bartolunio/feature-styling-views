import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.contentBlogWrapper}>
      <div className={`${styles.shopFounder} ${styles.item}`}>
        <div className={styles.contentShopFounder}>
          <p>Shop Founder</p>
          <p>Marcin Bielacha</p>
        </div>
      </div>
      <div className={`${styles.offers} ${styles.item}`}>
        <div className={styles.contentOffers}>
          <p>Offers</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            in a consequuntur nam perferendis porro nulla
          </p>
        </div>
      </div>
      <div className={`${styles.comingSoon} ${styles.item}`}>
        <div className={styles.contentComingSoon}>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
