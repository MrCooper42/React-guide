import React, {Component} from "react";
import {Cockpit} from "../components/Cockpit/Cockpit";
import {Persons} from "../components/Persons/Persons";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  
  state = {
    persons: [
      {id: "3fv2r", name: "Matt", age: 29},
      {id: "f434f", name: "Rio", age: 28},
      {id: "g2533", name: "Roldan", age: 28},
    ],
    otherState: "some other value",
    showPersons: false,
  };
  
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  
  // UNSAFE_componentWillMount() {
  //   console.log("[App.js] componentWillMount (This will be deprecated)");
  // }
  //
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    
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
    console.log("[App.js] render");
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }
    
    
    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
