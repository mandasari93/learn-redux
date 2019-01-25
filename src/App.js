import React, { Component } from 'react';
import './App.css';

import Number from './components/Number'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
        <Number />
        <Counter />
      </div>
    );
  }
}

export default App;
