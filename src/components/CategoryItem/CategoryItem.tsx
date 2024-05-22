import styles from './CategoryItem.module.css';
import imageHoodie from '../../assets/bluza.jpg';
import imageHandbag from '../../assets/torebka.jpg';
import imageShirt from '../../assets/koszulka.webp';
import imageElectronics from '../../assets/electronics.jpg';

const CategoryItem = () => {
  const categories = [
    {
      name: 'Women clothing',
      quantity: '3 Items',
      imageSrc: imageHoodie,
    },
    { name: 'Jewelery', quantity: '6 Items', imageSrc: imageHandbag },
    {
      name: 'Men clothing',
      quantity: '12 Items',
      imageSrc: imageShirt,
    },
    { name: 'Electronics', quantity: '9 Items', imageSrc: imageElectronics },
  ];

  return (
    <div className={styles.contentCategory}>
      {categories.map((category, index) => (
        <div className={styles.categoryItem} key={index}>
          <img src={category.imageSrc} alt={category.name} className={styles.imageContainer} />
          <div className={styles.textOverlay}>
            <p className={styles.name}>{category.name}</p>
            <p className={styles.quantity}>{category.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
