import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AuthContext from '../../../context/auth-context';
import { Auxillary } from '../../../higherOrderComponents/Auxillary';
import { withClass } from '../../../higherOrderComponents/withClass';
import styles from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');

    const { age, name, children, changed, click } = this.props;

    return (
      // could also just use React.Fragment or import Fragment to avoid dot notation
      <Auxillary>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p key="i1" onClick={click}>
          I'm a {name} and I am {age} years old!
        </p>
        <p key="i2">{children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}} older approach
          ref={this.inputElement}
          type="text"
          onChange={changed}
          value={name}
        />
      </Auxillary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  isAuth: PropTypes.bool
};

export default withClass(Person, styles.Person);
