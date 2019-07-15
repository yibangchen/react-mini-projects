import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => (
  <div className="home-hero">
    <h1>Hello hello h1</h1>
    <h4>New to Warbler?</h4>
    <Link to='/singup' className='btn btn-primary'>
      Sign up here
    </Link>
  </div>
)

export default Homepage