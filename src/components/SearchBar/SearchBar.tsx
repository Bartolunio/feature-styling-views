import { useState } from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleClick = () => {
    setShowPlaceholder(false);
    setTimeout(() => {
      setShowPlaceholder(true);
    }, 2000);
  };
  return (
    <div className={styles.contentSearchBar}>
      <input
        className={styles.inputSearch}
        type='text'
        placeholder={showPlaceholder ? 'Search for products' : ''}
        // placeholder='Search for products'
        onClick={handleClick}
      />
      <button>
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
