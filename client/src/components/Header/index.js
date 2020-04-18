import React from 'react'
import './style.css'

function Header(){
    return (
        <header className="nav-area navbar-fixed-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-menu">
                        <div className="navbar navbar-cus">
                            <div className="navbar-header">
                                <a href="index.html" className="navbar-brand">Garden Guru</a>
                            </div>

                            <div className="navbar-collapse collapse">
                                <nav>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header