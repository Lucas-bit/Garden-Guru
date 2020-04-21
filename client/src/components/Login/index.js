import React from 'react'
import './style.css'
import Title from '../Title'
import succulent from '../../images/green-succulent.jpg'
import { Row, Container, Col  } from '../Grid'

function Login(){
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
                    <form action="http://localhost:3001/users/login" method="POST">
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
  
            
    )
}

export default Login