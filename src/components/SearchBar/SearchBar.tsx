import { useState } from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setShowPlaceholder(false);
    setTimeout(() => {
      setShowPlaceholder(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className={styles.contentSearchBar}>
      <input
        className={styles.inputSearch}
        type='text'
        placeholder={showPlaceholder ? 'Search for products' : ''}
        onClick={handleClick}
        value={inputValue}
        onChange={handleChange}
      />
      <button>
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
