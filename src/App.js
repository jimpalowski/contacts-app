import React, { Component } from 'react';
import PropTypes from 'proptypes'

class ContactList extends React.Component {
  render() {
    state {
      screen: this.props;

    }
    const people = this.props.contacts
    return <ol>
      {people.map((person => (
        <li key={person.name}>{person.name}</li>
        <li key={person.email}>{person.email}</li>
      )))}
    </ol>
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Tyler '},
          { name: 'Karen' },
          { name: 'Richard '},
          { name: 'Jim' }
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]}/>
      </div>
    );
  }
}

export default App;
