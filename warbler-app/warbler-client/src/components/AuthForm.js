import React, { Component } from 'react'

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      username:'',
      password:'',
      profileImageUrl:''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup': 'signin';
    // console.log(`AuthForm state: ${this.state.email}`);

    this.props.onAuth(authType, this.state)
      .then(() => {
        console.log('Logged in successfully');
      })
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } = this.props;
    
    // listen to the change in the route
    history.listen(() => { removeError(); });

    return (
      <div className= 'row justify-content-md-center text-center'>
        <div className='col-md-6'>
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {errors.message && 
              <div className="Alert alert-danger">
                {errors.message}
              </div>
            }
            <label htmlFor='email'>Email:</label>
            <input className='form-control' id='email' name='email' type='text'
              onChange={this.handleChange} value={email}
            />
            <label htmlFor='password'>Password:</label>
            <input className='form-control' id='password' name='password' type='password'
              onChange={this.handleChange}
            />
            {signUp && (
              <div>
                <label htmlFor='username'>Username:</label>
                <input className='form-control' id='username' name='username' type='text'
                  onChange={this.handleChange} value={username}
                />
                <label htmlFor='image-url'>Image URL:</label>
                <input className='form-control' id='image-url' name='profileImageUrl' type='image-url'
                  onChange={this.handleChange} value={profileImageUrl}
                />      
              </div>
            )}
            <button className="btn btn-primary btn-block btn-lg" type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    )
  }
}