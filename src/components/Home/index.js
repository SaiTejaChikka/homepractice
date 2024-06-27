import {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {
    isLoggedIn: false,
    message: 'Please Login',
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true, message: 'Welcome User'})
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false, message: 'Please Login'})
  }

  render() {
    const {isLoggedIn, message} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <Message name={message} />
          <div>
            {isLoggedIn ? (
              <Logout onClick={this.handleLogout} />
            ) : (
              <Login onClick={this.handleLogin} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
