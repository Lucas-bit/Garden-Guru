import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../../lib/isAuthenticated'

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
        <div>
            <h1>Login</h1>
            <form onSubmit={this.submit.bind(this)}>
            <div className="form-group">
            <label for="email">Email: </label>
            <input
                type="email"
                id="email"
                name="username"
                className="form-control"
            />
            </div>
            <div className="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                className="form-control"
            />
            </div>
            <div>
                <input type="submit" value="Log in" />
            </div>
            </form>
            <p className="lead mt-4">Dont Have An Account?</p>
        <a className ="lead mt-4 register-btn" href="/register">Register Here</a>

        </div>
        )
    }
    }
}