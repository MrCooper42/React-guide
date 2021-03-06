import React, { Component } from 'react';
import { Cockpit } from '../components/Cockpit/Cockpit';
import { Persons } from '../components/Persons/Persons';
import AuthContext from '../context/auth-context';
import { Auxillary } from '../higherOrderComponents/Auxillary';
import { withClass } from '../higherOrderComponents/withClass';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '3fv2r', name: 'Matt', age: 29 },
      { id: 'f434f', name: 'Rio', age: 28 },
      { id: 'g2533', name: 'Roldan', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // UNSAFE_componentWillMount() {
  //   console.log("[App.js] componentWillMount (This will be deprecated)");
  // }
  //
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] componentDidUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons,
        changedCounter: ++prevState.changedCounter
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons; This can cause issues due to mutating original array. create new one
    const persons = new Array(...this.state.persons);
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: !this.state.authenticated
    });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Auxillary styles={styles.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Component
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, styles.App);
