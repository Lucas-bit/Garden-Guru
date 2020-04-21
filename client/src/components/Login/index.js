import React, { useState } from 'react'
import './style.css'
import Title from '../Title'
import succulent from '../../images/green-succulent.jpg'
import { Row, Container, Col  } from '../Grid'


function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUserChange = event => {
        setUsername(event.target.value); 
    };
    const handlePassChange = event => {
        setPassword(event.target.value); 
    };

    const handleLogin = (event) => {
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: {
                username: username,
                password: password
            }
        })
        .then(response=>{
            console.log("login response:")
            console.log(response)

        })
    }


    return(
        <React.Fragment>
        <div className="row">
            <div className="succulent-photo col-md-5 col-sm-5 col-xs-12">
                <img className="succulent-photo" src={succulent} alt="Succulent Photo"/>
            </div>
                <form action="http://localhost:3001/users/login" method="POST">
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={username}
                        onChange={handleUserChange}
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
                        value={password}
                        onChange={handlePassChange}
                        className="form-control"
                        placeholder="Enter Password"
                    />
                    </div>
                    <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">
                    Sign In
                    </button>
                </form>
                <p className="lead mt-4">Dont Have An Account?</p>
                <a className ="lead mt-4 register-btn" href="/register">Register Here</a>
                </div>
            
        </React.Fragment>
  
            
    )
}

export default Login