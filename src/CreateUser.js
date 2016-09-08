import React, {Component} from 'react'
import Rebase from 're-base'
import {Link} from 'react-router'



class CreateUser extends Component {
  constructor(){
    super();
    var base = {
        apiKey: "AIzaSyB5n-eyFjG7ci0p1bGJpIMKQCPxDY5vS14",
        authDomain: "login-app-2c048.firebaseapp.com",
        databaseURL: "https://login-app-2c048.firebaseio.com",
        storageBucket: "login-app-2c048.appspot.com",
      };
  }
  createUser() {
    base.createUser({
    email: this.refs.email.value,
    password: this.refs.password.value
  }, userHandler);
  }
  componentDidMount(){
  this.ref = base.syncState('users', {
    context: this,
    state: 'users'
  });
}
componentWillUnmount(){
  base.removeBinding(this.ref);
}
  render () {
    return (
      <div id="create-user">
        <form onSubmit={() => this.createUser()}>
          <input placeholder="email" ref="email"/>
          <input placeholder="password" ref="password"/>
          <Link to="/login"><button type="submit">Sign Up</button></Link>
          <Link to="/login"><button type="submit">I already have an account.</button></Link>
        </form>
      </div>
    );
  }
}

export default CreateUser
