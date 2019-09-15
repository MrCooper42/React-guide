import React from "react";
import {Person} from "./Person/Person";

export const Persons = (props) => (
  props.persons.map((person, index, arr) => {
    const {
      name,
      age,
      id,
    } = person;
    
    return <Person
      click={() => props.clicked(index)}
      name={name}
      age={age}
      key={id}
      changed={(event) => props.changed(event, person.id)}
    />;
  })
);
