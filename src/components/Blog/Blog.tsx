import styles from './Blog.module.css';
import Marcin from '@assets/Marcin.jpg';
import Offert from '@assets/offert.jpg';
import comingSoonImage from '@assets/comingSoon.jpg';

const Blog = () => {
  return (
    <div className={styles.contentBlogWrapper}>
      <div className={styles.container}>
        <img className={styles.items} src={Marcin} />
        <p> Shop Founder - Marcin Bielacha</p>
      </div>
      <div className={styles.container}>
        <img className={styles.items} src={Offert} />
        <p>
          offers - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio in a consequuntur nam perferendis porro nulla'
        </p>
      </div>
      <div className={styles.container}>
        <img className={styles.items} src={comingSoonImage} />
      </div>
    </div>
  );
};
export default Blog;
