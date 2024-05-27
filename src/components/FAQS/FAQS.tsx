import styles from './FAQS.module.css';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

const FAQS = () => {
  const [openPurchasesIndex, setOpenPurchasesIndex] = useState(null);
  const [openDeliveryIndex, setOpenDeliveryIndex] = useState(null);

  const togglePurchasesOpen = (index) => {
    setOpenPurchasesIndex(openPurchasesIndex === index ? null : index);
  };

  const toggleDeliveryOpen = (index) => {
    setOpenDeliveryIndex(openDeliveryIndex === index ? null : index);
  };
  const handleGoBack = () => {
    window.history.back();
  };

  const questionsPurchases = [
    'What is your international return policy?',
    'How can I find your international delivery policy?',
    "What should I do if my order hasn't been delivered yet?",
    'How can I get a new returns note?',
    "I'm an international customer, have you received my returned items?",
  ];

  const answersPurchases = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  ];

  const questionDelivery = [
    'How can I get a new returns note?',
    'How can I find your international delivery policy?',
    'What is your international returns policy?',
    'What should I do if my order hasnt been delivered yet?',
    'What should I do if my order hasnt been delivered yet?',
    'Im an international customer, have you received my returned items?',
  ];

  const answersDelivery = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  ];

  return (
    <div className={styles.contentFAQS}>
      <div className={styles.navigation}>
        <IoArrowBackSharp
          onClick={handleGoBack}
          className={styles.handleGoBack}
        />
      </div>

      <h1 className={styles.title}>Online Purchases</h1>
      <p>
        Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum.
        Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus.
        Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem,
        nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum
        aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae.
      </p>
      <div className={styles.faq}>
        {questionsPurchases.map((question, index) => (
          <div key={index} className={styles.contentquestions}>
            <p
              onClick={() => togglePurchasesOpen(index)}
              className={styles.question}
            >
              {openPurchasesIndex === index ? <MdRemove /> : <MdAdd />}
              {question}
            </p>
            {openPurchasesIndex === index && (
              <div className={styles.contentAnswers}>
                <p>{answersPurchases[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <h1 className={styles.title}>Product Delivery</h1>
      <p>
        Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem,
        nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum
        aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae.
      </p>
      <div className={styles.faq}>
        {questionDelivery.map((question, index) => (
          <div key={index} className={styles.contentquestions}>
            <p
              onClick={() => toggleDeliveryOpen(index)}
              className={styles.question}
            >
              {openDeliveryIndex === index ? <MdRemove /> : <MdAdd />}
              {question}
            </p>
            {openDeliveryIndex === index && (
              <div className={styles.contentAnswers}>
                <p>{answersDelivery[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQS;
