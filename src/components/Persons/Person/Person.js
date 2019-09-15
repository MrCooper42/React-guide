import React, {Component} from "react";

import styles from "./Person.module.css";

export class Person extends Component {
  
  render() {
    console.log("[Person.js] rendering...");
    
    const {
      age,
      name,
      children,
      changed,
      click,
    } = this.props;
    
    return (
      <div className={styles.Person}>
        <p onClick={click}>I'm a {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
      </div>
    );
  }
};
