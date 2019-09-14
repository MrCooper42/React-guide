import Radium from "radium";
import React from "react";

import "./Person.css";

export const Person = Radium((props) => {
  const {
    age,
    name,
    children,
    changed,
    click,
  } = props;
  return (
    <div className="Person">
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  );
});
