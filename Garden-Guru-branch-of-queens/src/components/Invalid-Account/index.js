import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../../lib/isAuthenticated'
import succulent from '../../images/green-succulent.jpg'
import Title from '../Title/index'
import "./style.css";

export default class Login extends Component {
    
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
    fetch('/login', {
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
  return (
    <React.Fragment>
         <React.Fragment>
        <div className="row">
            <div className="succulent-photo col-md-5 col-sm-5 col-xs-12">
                <img className="succulent-photo" src={succulent} alt="Succulent Photo"/>
            </div>
               

            <div className= "card-and-title-container col-md-7 col-sm-12 col-xs-12">
                <div className= "gg-card-title">
                <Title/>
                    <div className="card card-body">
                        <div className="welcome-container">
                            <h2 className="welcome">Whoops!!</h2>
                            <p className="paragraph">It doesnt look like we don't have your account on file or you may have entered in the wrong email or password, please try again or sign up below! </p>
                        </div>
                        <form onSubmit={this.submit.bind(this)}>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                          type="email"
                          id="email"
                          name="username"
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
                                placeholder="Enter Password"
                            />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                            Sign In
                            </button>
                        </form>
                        <p className="lead mt-4 post-form">Dont Have An Account?</p>
                        <a className ="lead mt-4 post-form register-btn" href="/register">Register Here</a>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        </React.Fragment>

    );
}}}