import styles from './ShoppingTools.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Ri24HoursLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from "react-icons/ai";


import { useState } from 'react';

const ShoppingTools = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className={styles.contentShoppingTools}>
        <div
          className={styles.support}
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <Ri24HoursLine className={styles.icon} />
          <div className={styles.informationSupport}>
            <p>Customer Support</p>
            <p>1-25-534-634</p>
          </div>
          <IoIosArrowDown className={styles.supportInformations} />

          {showInfo && (
            <div className={styles.additionalInfo}>
              <p>New York</p>
              <p>1-800-333-42-63</p>
              <span>Ny@woodstock.com</span>
              <p>London</p>
              <p>1-800-331-42-23</p>
              <span>Lo@woodstock.com</span>

              <div className={styles.ourCommunity}>
                <FaFacebook className={styles.fb} />
                <RiInstagramFill className={styles.ig} />
                <AiFillTwitterCircle className={styles.twit}/>
              </div>
            </div>
          )}
        </div>
        <div className={styles.shoppingCart}>
          <FiShoppingCart className={styles.icon} />
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
