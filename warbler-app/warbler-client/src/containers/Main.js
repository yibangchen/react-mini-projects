// routing logic
import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm'
import { authUser } from '../store/actions/auth'
import { removeError } from '../store/actions/errors';

const Main = props => {
  const { authUser, errors, removeError } = props;
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props=><Homepage {...props} />} />
        <Route exact path='/signin' render={props => {
          return (
            <AuthForm 
              removeError={ removeError }
              errors={ errors }
              onAuth={authUser}
              buttonText='Log in'
              heading='Welcome back'
              {...props} />
            )
        }} />
        <Route exact path='/signup' render={props => {
          return (
            <AuthForm 
              removeError={ removeError }
              errors={ errors }
              onAuth={authUser}
              signUp
              buttonText='Sign me up!'
              heading='Join Warbler'
              {...props} />
            )
        }} />
      </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter( connect(mapStateToProps, { authUser, removeError })(Main) )








