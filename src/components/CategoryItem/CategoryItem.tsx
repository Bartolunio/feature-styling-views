import styles from './CategoryItem.module.css';

const CategoryItem = () => {
  const categories = [
    { name: 'Hoodie', quantity: '3 Items', imageClass: styles.imageHoodie },
    { name: 'Handbag', quantity: '6 Items', imageClass: styles.imageHandbag },
    { name: 'Shirt', quantity: '12 Items', imageClass: styles.imageShirt },
    { name: 'Shoes', quantity: '9 Items', imageClass: styles.imageShoes },
  ];
  return (
    <div className={styles.contentCategory}>
      {categories.map((category, index) => (
        <div className={styles.categoryItem} key={index}>
          <div className={`${category.imageClass} ${styles.imageContainer}`}>
            <p className={styles.name}>{category.name}</p>
            <p className={styles.quantity}>{category.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
