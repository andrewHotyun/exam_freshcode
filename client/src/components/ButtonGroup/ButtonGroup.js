import React, { useState } from 'react';
import styles from './ButtonGroup.module.sass';

const buttons = [
  {
    agreement: 'Yes',
    body: 'The Domain should exactly match the name',
  },
  {
    agreement: 'Yes',
    body: 'But minor variations are allowed (Recommended)',
  },
  {
    agreement: 'No',
    body: 'I am only looking for a name, not a Domain',
  },
];

const ButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const getButtonClassName = (index) => {
    return index === activeIndex ? styles.buttonActive : styles.buttonNotActive;
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <button
              className={`${styles.button} ${getButtonClassName(index)}`}
              key={index}
              onClick={() => handleButtonClick(index)}
            >
              <div>{button.agreement}</div>
              <p>{button.body}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default ButtonGroup;