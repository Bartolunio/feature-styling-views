import { useState } from 'react';
import styles from './ContactUs.module.css';
import { IoArrowBackSharp } from 'react-icons/io5';

const ContactUs = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    if (username && email) {
      alert('Your message has been successfully sent');
      setUsername('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please enter your username and email address');
    }
  };

  return (
    <div className={styles.contentContactUs}>
      <div className={styles.contentMessage}>
        <div className={styles.back}>
          <IoArrowBackSharp
            onClick={handleGoBack}
            className={styles.handleGoBack}
          />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR NAME (REQUIRED)</h1>
          <input
            type='text'
            className={styles.messageSmall}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR EMAIL (REQUIRED)</h1>
          <input
            type='email'
            className={styles.messageSmall}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>SUBJECT</h1>
          <input type='text' className={styles.messageSmall} />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR MESSAGE</h1>
          <input
            type='text'
            className={styles.yourMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className={styles.sendButton} onClick={handleSubmit}>
          SEND
        </button>
      </div>

      <div className={styles.information}>
        <h1>OUR ADDRESS</h1>
        <p>New York</p>
        <p>1-800-333-42-63</p>
        <span>Ny@woodstock.com</span>
        <p>London</p>
        <p>1-800-331-42-23</p>
        <span>Lo@woodstock.com</span>
        <h1>OPENING HOURS</h1>
        <div className={styles.OpeningHours}>
          <p>Monday to Friday: 10am to 6pm</p>
          <p>Saturday: 10am to 4pm</p>
          <p>Sunday: 12am t0 4pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
