import React from 'react'
import './style.css'
import search from '../../images/organic-search-icon.png'
import navLogo from '../../images/Garden-Guru-Transparent-Super-Tiny.png'

function NavBar(){
    return (
        <React.Fragment>
        <header className="nav-area navbar-fixed-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-menu">
                        <div className="navbar">
                            <div className="navbar-header">
                                <a href="/search" className="navbar-brand">

                                    <img className="navbar-logo" src={navLogo} alt="navbar-logo"></img>
                                GARDEN GURU
                                </a>
                            </div>
                           
                                <div id="menu-outer">
                                <div class="table">
                                    <ul class="horizontal-list">
                                        <li><a href="#">SEARCH PLANTS</a></li>
                                        <a href="/search" className ="search-icon">
                                            <img className="search-icon" alt="search-icon" src={search}></img>
                                        </a>
                                        <li className="logout"><a href="/home">LOG OUT</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </header>



</React.Fragment>
    )
}

export default NavBar