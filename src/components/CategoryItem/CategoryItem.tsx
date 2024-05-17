import styles from './CategoryItem.module.css';

const CategoryItem = () => {
  const categories = [
    {
      name: 'Women clothing',
      quantity: '3 Items',
      imageClass: styles.imageHoodie,
    },
    { name: 'Jewelery', quantity: '6 Items', imageClass: styles.imageHandbag },
    {
      name: 'Men clothing',
      quantity: '12 Items',
      imageClass: styles.imageShirt,
    },
    { name: 'Electronics', quantity: '9 Items', imageClass: styles.imageShoes },
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
