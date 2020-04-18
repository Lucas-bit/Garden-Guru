import React from 'react'
// import '/test.style.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


import search from '../../images/organic-search-icon.png'
import navLogo from '../../images/Garden-Guru-Transparent-Super-Tiny.png'

function NavBar(){
    return (
    
        <Navbar className="nav-bar" bg="dark" variant="dark">
          <Navbar.Brand className= "garden-guru-title text-hover" href="/search">
            <img
              alt=""
              src= {navLogo}
              width="40"
              height="30"
              className="gg-logo d-inline-block align-bottom"
            />{' '}
           Garden Guru
          </Navbar.Brand>
         
           <Navbar.Collapse>
           <Nav className= "search-container text-hover ml-auto" href="/search">
           <Nav.Item className ="search-word ">
           Search
            <img
              alt=""
              src= {search}
              width="30"
              height="30"
              className="magnify glass d-inline-block align-bottom"
            />{' '}
            </Nav.Item>
          </Nav>
          <Nav.Item className="logout text-hover" href="/">
            Log Out
          </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
        
    )
}

export default NavBar