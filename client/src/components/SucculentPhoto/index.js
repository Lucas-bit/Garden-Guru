import React from 'react'
import './style.css'
import succulent from '../../images/green-suculent.jpg'


function SuccelentPhoto(){
    return(
        <>
        <div className="col-md-5">
                <img className ='large-logo' src={succulent} alt='Garden Guru Logo'/>
            </div>
        </>
    )
}

export default SuccelentPhoto