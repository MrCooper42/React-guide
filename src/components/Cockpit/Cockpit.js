import React, { useContext, useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import styles from './Cockpit.module.css';

export const Cockpit = React.memo(props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to the cloud');
    // }, 1000);
    toggleBtnRef.current.click();
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
  const { personsLength, showPersons, clicked, title } = props;
  let btnClass = '';

  if (showPersons) {
    btnClass = styles.Red;
  }
  if (personsLength <= 2) {
    assignedStyles.push(styles.red);
  }

  if (personsLength <= 1) {
    assignedStyles.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedStyles.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
});
