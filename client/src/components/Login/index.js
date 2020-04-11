import React from 'react'
import './style.css'
import Title from '../Title'
import { Row, Container, Col  } from '../Grid'

function Login(){
    return(
        <div>
                <Title/>
               <form class = "login-form">
                <div class="inner-form"> 
                
                    <div class = "other-inner-form">
                    
                        <div class ="username">
                            <span class="username">E-mail: </span> <input id="email-input" class ="input" type="email" name="login"/>
                        </div> 
                        <div class = "password">
                            <span class ="password">Password:</span><input id="password-input" class="input" type="password" name="password"/>
                        </div>
                        <div>
                            <button href="/myGarden" id="log-in-button" class="button">Log in</button>
                        </div>
                        <div class = "signup-div">
                            <button href="/signup" id = "signup-button" class ="button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
    )
}

export default Login