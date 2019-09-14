import React, {Component} from "react";
import "./App.css";
import {Person} from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Matt", age: 29},
      {name: "Rio", age: 28},
      {name: "Roldan", age: 28},
    ],
    otherState: "some other value",
  };
  
  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: "Rio", age: 28},
        {name: "Roldan", age: 29},
      ],
    });
  };
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Matt", age: 29},
        {name: event.target.value, age: 28},
        {name: "Roldan", age: 28},
      ],
    });
  };
  
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      fontcolor: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Mr.cooper")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Matthew")}
        >
          My Hobbies: Programming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
