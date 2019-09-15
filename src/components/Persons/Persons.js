import React, { PureComponent } from 'react';
import Person from './Person/Person';

export class Persons extends PureComponent {
  // NOTE: This will throw error as no state has been set at this point
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  componentWillUnmount() {
    console.log('[Person.js] componentWillUnmount');
  }

  // NOTE = Use this if not using pure component
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');

    const { persons, clicked, changed } = this.props;

    return persons.map((person, index, arr) => {
      const { name, age, id } = person;

      return (
        <Person
          click={() => clicked(index)}
          name={name}
          age={age}
          key={id}
          changed={event => changed(event, person.id)}
        />
      );
    });
  }
}
