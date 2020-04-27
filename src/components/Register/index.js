import React, { Component } from "react";
import "./style.css";
import logo from '../../images/Garden-Guru-Transparent-Super-Tiny.png'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../../lib/isAuthenticated'

export default class Register extends Component {
    
  constructor(props) {
  super(props)

  this.state = {
      loggedin: isAuthenticated()
  }
  }

  submit(e) {
  e.preventDefault()
  e.stopPropagation()
  
  let form = e.target
  let formData = new FormData(form)
  let params = new URLSearchParams(formData)
  
  // Send request to the server
  fetch('/register', {
      method: 'POST',
      body: params
  }).then( (res) => {
      console.log(res)
      return res.json()
  }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
  }).catch( (err) => {
      console.error(err)
  })
  }
render() {
  if ( this.state.loggedin ) {
    return (
    <Redirect
        to={{
        pathname: '/mygarden',
        state: { from: this.props.location }
        }}
    />
    )
  } else {
    return(
<React.Fragment>
  <div className="col-md-7 m-auto">
    <div className="card register-card card-body">
      <h1 className="text-center mb-3">
          <img class ='logo' src={logo}/>
        <i className="fas fa-user-plus"></i>REGISTER 
          <img class = 'logo' src={logo}/>
      </h1>
      <form onSubmit={this.submit.bind(this)}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Create Password"
          />
        </div>
        <div className="form-group">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
      </form>
      <p className="lead mt-4">Have An Account? <a className = 'login-link' href="/">Login</a></p>
    </div>
  </div>
</React.Fragment>
    )
}
}}
