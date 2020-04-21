import React, { useState } from 'react'
import './style.css'
import Title from '../Title'
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
        <div className= "card-and-title-container col-md-7">
            <div className= "card-title">
            <Title/>
                <div className="card card-body">
                <div className="welcome-container">
                <h2 className="welcome">Welcome!</h2>
                <p className="paragraph">Login to begin exploring plants, adding them to your garden,  and keeping track of their care and growth! </p>
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
            </div>
        </div>
        </React.Fragment>
  
            
    )
}

export default Login