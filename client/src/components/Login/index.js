import React from 'react'
import './style.css'
import Title from '../Title'
import { Row, Container, Col  } from '../Grid'

function Login(){
    return(
        <React.Fragment>
        <div className="col-md-7">
        <Title/>
            <div className="card card-body">
            <div className = "welcome-container">
            <h2 className = 'welcome'>Welcome!</h2>
            <p className ='paragraph'>Login to begin exploring plants, adding them to your garden, </p>
            <p className='paragraph2'> and keeping track of their care and growth!</p>
        </div>
            <form action="/users/register" method="POST">
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
                <button type="submit" className="btn btn-primary btn-block">
                Sign In
                </button>
            </form>
            <p className="lead mt-4">Dont Have An Account? <a className ='register-btn' href="/register">Register Here</a></p>
            </div>
        </div>
        </React.Fragment>
  
            
    )
}

export default Login