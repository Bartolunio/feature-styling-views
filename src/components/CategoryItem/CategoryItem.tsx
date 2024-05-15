import styles from './CategoryItem.module.css';

const CategoryItem = () => {
  return (
    <div className={styles.contentCategory}>
      <div className={styles.categoryItem}>
        <p className='name'>Smartwatch</p>
        <span className='quantity'>3 Items</span>
      </div>
      <div className={styles.categoryItem}>
        <p className='name'>Accessories</p>
        <span className='quantity'>1 Items</span>
      </div>
      <div className={styles.categoryItem}>
        <p className='name'>Jawellery</p>
        <span className='quantity'>12 Items</span>
      </div>
      <div className={styles.categoryItem}>
        <p className='name'>Watches</p>
        <span className='quantity'>7 Items</span>
      </div>
    </div>
  );
};

export default CategoryItem;
