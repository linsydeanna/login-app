import React, {Component} from 'react'
import {Link} from 'react-router'

class Login extends Component {
  // onSubmit={sendToFirebase}
  render () {
    return (
      <div id="login">
        <form>
          <input placeholder="email"/>
          <input placeholder="password"/>
          <Link to="/chat"><button>Log In</button></Link>
        </form>
      </div>
    )
  }
}

export default Login
