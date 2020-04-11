import React from 'react'
import './style.css'
import gardeners from '../../images/green-suculent.jpg'


function About(){
    return(
        <>
        <row>
            <div className="col-xs-6 col-sm-5 col-md-5">
                <img className ='large-logo' src={gardeners} alt='Garden Guru Logo'/>
            </div>
        </row>
        </>
    )
}

export default About