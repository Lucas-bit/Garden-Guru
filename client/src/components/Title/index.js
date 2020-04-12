import React from 'react'
import Logo from '../../images/Garden-Guru-Transparent-Tiny.png'
import './style.css'


function Title(){
    return(
        <React.Fragment>
        <h1 className = 'title'><span><img src ={Logo}/></span>Garden Guru<span><img src ={Logo}/></span></h1>
        
        </React.Fragment>
    )
}

export default Title