import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.contentBlogWrapper}>
      <div className={`${styles.shopFounder} ${styles.item}`}>
        <img
          className={styles.contentShopFounder}
          src='/assets/Marcin.jpg'
          alt='Shop Founder - Marcin Bielacha'
        />
      </div>
      <div className={`${styles.offers} ${styles.item}`}>
        <img
          className={styles.contentOffers}
          src='/assets/offert.jpg'
          alt='Offers - Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in a consequuntur nam perferendis porro nulla'
        />
      </div>
      <div className={`${styles.comingSoon} ${styles.item}`}>
        <img
          className={styles.contentComingSoon}
          src='path/to/comingSoonImage.jpg'
          alt='Coming Soon'
        />
      </div>
    </div>
  );
};
export default Blog;
// import styles from './Blog.module.css';

// const Blog = () => {
//   return (
//     <div className={styles.contentBlogWrapper}>
//       <div className={`${styles.shopFounder} ${styles.item}`}>
//         <div className={styles.contentShopFounder}>
//           <p>Shop Founder</p>
//           <p>Marcin Bielacha</p>
//         </div>
//       </div>
//       <div className={`${styles.offers} ${styles.item}`}>
//         <div className={styles.contentOffers}>
//           <p>Offers</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//             in a consequuntur nam perferendis porro nulla
//           </p>
//         </div>
//       </div>
//       <div className={`${styles.comingSoon} ${styles.item}`}>
//         <div className={styles.contentComingSoon}>
//           <p>Coming Soon</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
