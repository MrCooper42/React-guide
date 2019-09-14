import React from "react";

import styles from "./Person.module.css";

export const Person = (props) => {
  const {
    age,
    name,
    children,
    changed,
    click,
  } = props;
  
  return (
    <div className={styles.Person}>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  );
};
