import styles from './Blog.module.css';
import Marcin from '../../assets/Marcin.jpg';
import Offert from '../../assets/offert.jpg';
import comingSoonImage from '../../assets/comingSoon.jpg';

const Blog = () => {
  return (
    <div className={styles.contentBlogWrapper}>
      <div className={styles.item}>
        <img
          className={styles.contentShopFounder}
          src={Marcin}
          alt='Shop Founder - Marcin Bielacha'
        />
      </div>
      <div className={styles.item}>
        <img
          className={styles.contentOffers}
          src={Offert}
          alt='Offers - Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in a consequuntur nam perferendis porro nulla'
        />
      </div>
      <div className={styles.item}>
        <img
          className={styles.contentComingSoon}
          src={comingSoonImage}
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
