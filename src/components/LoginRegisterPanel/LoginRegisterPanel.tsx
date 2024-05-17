import { useState } from 'react';
import styles from './LoginRegisterPanel.module.css';

const LoginRegisterPanel = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username or Email Address:', username);
    console.log('Password:', password);
  };
  return (
    <div className={styles.contentLoginPanel}>
      <h1>LOGIN</h1>
      <div className={styles.loginPanel}>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor='password'>PASSWORD * </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={styles.information}>
              <button className={styles.loginBtn} type='submit'>
                Login
              </button>
              <div className={styles.checkbox}>
                <input type='checkbox' />
                <p>REMEMEBER ME</p>
                <span>Lost your password?</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginRegisterPanel;
