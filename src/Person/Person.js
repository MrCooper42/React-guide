import React from "react";

import "./Person.css";

export const Person = (props) => {
  const {
    age,
    name,
    children,
    changed,
    click,
  } = props;
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  );
};
