import React from 'react'
import './style.css'
import succulent from '../../images/green-suculent.jpg'


function SuccelentPhoto(){
    return(
        <>
        
        <img className ='large-logo' src={succulent} alt='Garden Guru Logo'/>
        <img className ='mobile-logo' src={succulent} alt='Garden Guru Logo'/>
           
        </>
    )
}

export default SuccelentPhoto

