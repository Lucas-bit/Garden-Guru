import React from 'react'
import Logo from '../../images/Garden-Guru-Transparent-Tiny.png'
import './style.css'


function Title(){
    return(
        <React.Fragment>
        <h1 className = 'title'><span><img src ={Logo}/></span>Garden Guru<span><img src ={Logo}/></span></h1>
        <h2 className = 'welcome'>Welcome!</h2>
        <p className ='paragraph'>Login to begin exploring plants, adding them to your garden, </p>
        <p className='paragraph2'> and keeping track their care and growth!</p>
        </React.Fragment>
    )
}

export default Title