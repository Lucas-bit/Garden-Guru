import React from 'react'
import './style.css'
import Title from '../Title'
import { Row } from '../Grid'

function Login(){
    return(
        <div>
            <div className='row'>
                <div className= "col-xs-6 col-sm-5 col-md-12">
                <Title/>
               <form class = "login-form">
                <div class="inner-form"> 
                
                    <div class = "other-inner-form">
                    
                        <div class ="username">
                            <span class="username">E-mail: </span> <input id="email-input" class ="login-input" type="email" name="login"/>
                        </div> 
                        <div class = "password">
                            <span class ="password">Password:</span><input id="password-input" class="password-input" type="password" name="password"/>
                        </div>
                        <div>
                            <a href="/myGarden" id="log-in-button" class="button">Log in</a>
                        </div>
                        <div class = "signup-div">
                            <a href="/signup" id = "signup-button" class ="button">Sign Up</a>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            
            </div>
            </div>
    )
}

export default Login