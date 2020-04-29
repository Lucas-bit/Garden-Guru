import React, { Component } from 'react'
import isAuthenticated from '../../lib/isAuthenticated'
import { Redirect } from 'react-router-dom'
import './style.css'
import Title from '../Title'
import succulent from '../../images/green-succulent.jpg'
import { Row, Container, Col  } from '../Grid'

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
        console.log("stage 1")
        if ( res.status === 401 ) {
          return false
        }
        return res.json()
    }).then(data => {
        console.log(data)
        if (data === false) {
        return this.setState({loggedin: false})
        }
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
    } else if ( this.state.loggedin === false) {
        return (
        <Redirect
            to={{
            pathname: '/invalid',
            state: { from: this.props.location }
            }}
        />
        )
    } else {
    return(
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
                            <h2 className="welcome">Welcome!</h2>
                            <p className="paragraph">Login to begin exploring plants, adding them to your garden,  and keeping track of their care and growth! </p>
                        </div>
                    <form onSubmit={ this.submit.bind(this) }>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          id="email"
                          name="username"
                          className="form-control"
                          placeholder="Enter Email"
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                            />
                            </div>
                            <input type="submit" value="Log in" />
                        </form>
                        <p className="lead mt-4 post-form">Dont Have An Account?</p>
                        <a className ="lead mt-4 post-form register-btn" href="/register">Register Here</a>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
  
            
    )
    }}}