import styles from './ShoppingTools.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Ri24HoursLine } from 'react-icons/ri';

const ShoppingTools = () => {
  return (
    <>
      <div className={styles.contentShoppingTools}>
        <div className={styles.support}>
          <Ri24HoursLine />
          <div className={styles.informationSupport}>
            <p>Customer Support</p>
            <p>1-25-534-634</p>
          </div>
        </div>
        <div className={styles.shoppingCart}>
          <FiShoppingCart />
          <div className={styles.informationShoppingCart}>
            <p>0 ITEMS</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingTools;
