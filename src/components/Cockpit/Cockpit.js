import React from "react";
import styles from "./Cockpit.module.css";

export const Cockpit = (props) => {
  let btnClass = "";
  
  const assignedStyles = [];
  const {
    persons,
    showPersons,
    clicked,
    title,
  } = props;
  
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
      <p className={assignedStyles.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};
