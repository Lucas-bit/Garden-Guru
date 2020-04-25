import React from 'react'
import './style.css'
import growing from '../../images/growing-plant.jpg'


function GrowPhoto(){
    return(
        <>
        <div className="col-md-5">
                <img className ='growing-plant' src={growing} alt="Growing Plant"/>
            </div>
        </>
    )
}

export default GrowPhoto