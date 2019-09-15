import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

export const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to the cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedStyles = [];
  const { persons, showPersons, clicked, title } = props;
  let btnClass = '';

  if (showPersons) {
    btnClass = styles.Red;
  }
  if (persons.length <= 2) {
    assignedStyles.push(styles.red);
  }

  if (persons.length <= 1) {
    assignedStyles.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedStyles.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
    </div>
  );
};
