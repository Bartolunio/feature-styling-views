import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contentContactUs}>
      <div className={styles.contentMessage}>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR NAME (REQUIRED)</h1>
          <input type='text' />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR EMAIL (REQUIRED)</h1>
          <input type='text' />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>SUBJECT</h1>
          <input type='text' />
        </div>
        <div className={styles.message}>
          <h1 className={styles.title}>YOUR MESSAGE</h1>
          <input type='text' className={styles.yourMessage} />
        </div>
      </div>

      <div className={styles.information}>
        <p>New York</p>
        <p>1-800-333-42-63</p>
        <span>Ny@woodstock.com</span>
        <p>London</p>
        <p>1-800-331-42-23</p>
        <span>Lo@woodstock.com</span>
      </div>
    </div>
  );
};

export default ContactUs;
