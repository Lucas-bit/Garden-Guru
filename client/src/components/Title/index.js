import React from 'react'
import Logo from '../../images/Garden-Guru-Transparent-Tiny.png'
import './style.css'


function Title(){
    return(
        <React.Fragment>
        <h1 className = 'gg-title'><span><img className ="title-logo" src={Logo}/></span>GARDEN GURU<span><img className ="title-logo" src={Logo}/></span></h1>
        </React.Fragment>
    )
}

export default Title