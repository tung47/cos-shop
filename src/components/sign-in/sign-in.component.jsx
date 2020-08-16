import React from 'react';

import './sing-in.styles.scss';

class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email:'', password: '' })
  }

  handleChange = event => {}

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name='email' type='email' value={this.state.email} required />
          <lable>Email</lable>
          <input 
            name='password' 
            type='password' 
            value={this.state.password}
            onChange 
            required 
          />
          <lable>Password</lable>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SingIn;