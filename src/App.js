import React, { Component } from 'react';
import Rebase from 're-base';
import CreateUser from './CreateUser'
import routes from './routes'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
