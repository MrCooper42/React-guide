import React from "react";
import {Person} from "./Person/Person";

export const Persons = (props) => {
  console.log("[Persons.js] rendering...");
  
  const {
    persons,
    clicked,
    changed,
  } = props;
  
  return persons.map((person, index, arr) => {
    const {
      name,
      age,
      id,
    } = person;
    
    return <Person
      click={() => clicked(index)}
      name={name}
      age={age}
      key={id}
      changed={(event) => changed(event, person.id)}
    />;
  });
};
