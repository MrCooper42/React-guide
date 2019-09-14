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
  
  const random = Math.random();
  
  if (random > 0.7) {
    throw new Error("Something bad happened");
  }
  
  return (
    <div className={styles.Person}>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  );
};
