import { useState } from 'react';
import styles from './LoginRegisterPanel.module.css';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RigtNavBar/RightNavBar';
import SearchBar from '../SearchBar/SearchBar';
import ShoppingTools from '../ShoppingTools/ShoppingTools';
import Navigation from '../Navigation/Navigation';
import '../../App.css';
const LoginRegisterPanel = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username or Email Address:', username);
    console.log('Password:', password);
  };
  return (
    <>
      <nav className='container-navBar'>
        <div className='left-navBar'>
          <LeftNavBar />
        </div>
        <div className='right-navBar'>
          <RightNavBar />
        </div>
      </nav>
      <div className='header-main-section'>
        <div className='search-area'>
          <div className='search-input'>
            <SearchBar />
          </div>
        </div>

        <div className='logo-area'></div>

        <div className='header-tools'>
          <ShoppingTools />
        </div>
      </div>
      <div className='container-main-navigation'>
        <nav className='navigation-menu'>
          <Navigation />
        </nav>
      </div>

      <div className={styles.loginPanel}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor='username'>USERNAME OR EMAIL ADDRESS</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password'>PASSWORD</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginRegisterPanel;
