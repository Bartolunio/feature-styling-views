import styles from './Blog.module.css';
import Marcin from '../../assets/Marcin.jpg';
import Offert from '../../assets/offert.jpg';
import comingSoonImage from '../../assets/comingSoon.jpg';

const Blog = () => {
  return (
    <div className={styles.contentBlogWrapper}>
      <div className={styles.item}>
        <img
          className={styles.items}
          src={Marcin}
          alt='Shop Founder - Marcin Bielacha'
        />
      </div>
      <div className={styles.item}>
        <img
          className={styles.items}
          src={Offert}
          alt='Offers - Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in a consequuntur nam perferendis porro nulla'
        />
      </div>
      <div className={styles.item}>
        <img
          className={styles.items}
          src={comingSoonImage}
          alt='Coming Soon'
        />
      </div>
    </div>
  );
};
export default Blog;

