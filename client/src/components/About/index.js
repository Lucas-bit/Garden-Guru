import React from 'react'
import './style.css'
import gardeners from '../../images/green-suculent.jpg'


function About(){
    return(
        <>
        <div className="col-md-5">
                <img className ='large-logo' src={gardeners} alt='Garden Guru Logo'/>
            </div>
        </>
    )
}

export default About