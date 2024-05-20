
import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import styles from './LoginRegisterPanel.module.css';

const LoginRegisterPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={styles.contentLoginPanel}>
        <div className={styles.naviLogin}>
          <h1>LOGIN</h1>
          <IoCloseCircleOutline
            className={styles.closeIcon}
            onClick={handleGoBack}
          />
        </div>
        <div className={styles.loginPanel}>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor='username'>USERNAME OR EMAIL ADDRESS * </label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='password'>PASSWORD *</label>
              <div className={styles.passwordContainer}>
                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <span
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <div className={styles.information}>
                <button className={styles.loginBtn} type='submit'>
                  Login
                </button>
                <div className={styles.informationPassword}>
                  <div className={styles.checkbox}>
                    <input type='checkbox' />
                    <p>REMEMEBER ME</p>
                  </div>
                  <span>Lost your password?</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginRegisterPanel;
