import React, {Component} from "react";
import "./App.css";
import {Person} from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: "3fv2r", name: "Matt", age: 29},
      {id: "f434f", name: "Rio", age: 28},
      {id: "g2533", name: "Roldan", age: 28},
    ],
    otherState: "some other value",
    showPersons: false,
  };
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    
    // const person = Object.assign({}, this.state.persons[personIndex])
    
    const person = {
      ...this.state.persons[personIndex],
    };
    
    person.name = event.target.value;
    
    const persons = [
      ...this.state.persons,
    ];
    
    persons[personIndex] = person;
    
    this.setState({
      persons,
    });
  };
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; This can cause issues due to mutating original array. create new one
    const persons = new Array(...this.state.persons);
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };
  
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      fontcolor: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index, arr) => {
              const {
                name,
                age,
                id,
              } = person;
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={name}
                age={age}
                key={id}
                changed={(event) => {
                  this.nameChangedHandler(event, person.id);
                }}
              />;
            })}
        </div>
      );
      style.backgroundColor = "red";
    }
    
    const classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    console.log("classes", classes);
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
