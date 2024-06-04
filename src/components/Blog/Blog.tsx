import styles from './Blog.module.css';
import Marcin from '@assets/Marcin.jpg';
import Offert from '@assets/offert.jpg';
import comingSoonImage from '@assets/comingSoon.jpg';
import { forwardRef } from 'react';

const Blog = forwardRef<HTMLElement>((_,ref) => {
  return (
    <section ref={ref} className={styles.containerBlogWrapper}>
      <h1 className={styles.titleBlog}>Latest news</h1>
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
    </section>
  );
});
export default Blog;
