import React, { useState } from 'react';
import styles from './FAQ.module.sass';

const FAQ = (props) => {
  const {
    faq: {question, answer},
  } = props;
  const [isActive, setIsActive] = useState(false);
  const switcher = () => setIsActive(!isActive);

  return (
    <div className={styles.faq}>
      <div className={styles.questions} onClick={switcher}>
        <h4>{question}</h4>
        {isActive ? (
          <i className='fas fa-arrow-down'> </i>
        ) : (
          <i className='fas fa-arrow-right'> </i>
        )}
      </div>
      {isActive && <p className={styles.p}> {answer}</p>}
    </div>
  );
}

export default FAQ;
