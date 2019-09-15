import React, { Component } from 'react';
import { Auxillary } from '../../../higherOrderComponents/Auxillary';
import { withClass } from '../../../higherOrderComponents/withClass';
import styles from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    const { age, name, children, changed, click } = this.props;

    return (
      // could also just use React.Fragment or import Fragment to avoid dot notation
      <Auxillary>
        <p key="i1" onClick={click}>
          I'm a {name} and I am {age} years old!
        </p>
        <p key="i2">{children}</p>
        <input key="i3" type="text" onChange={changed} value={name} />
      </Auxillary>
    );
  }
}

export default withClass(Person, styles.Person);
