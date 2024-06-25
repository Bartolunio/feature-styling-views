import { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchBar.module.css';
import { Product } from '@components/CardService/types';

const SearchBar = ({ product, setFilteredItems }) => {
  const [inputValue, setInputValue] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    if (inputValue === '') {
      setFilteredItems(product);
    } else {
      setFilteredItems(
        product.filter((product: Product) =>
          product?.title?.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue, product, setFilteredItems]);

  const handleClick = () => {
    setShowPlaceholder(false);
    setTimeout(() => {
      setShowPlaceholder(true);
    }, 1000);
  };

  return (
    <div className={styles.contentSearchBar}>
      <input
        className={styles.inputSearch}
        type='text'
        placeholder={showPlaceholder ? 'Search for products' : ''}
        onClick={handleClick}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
