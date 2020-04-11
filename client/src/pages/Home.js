import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Login from '../components/Login'
import { Col, Row, Container } from '../components/Grid'

function Home(){
    return(
    <div>
        <Row>
        <About/>
        <Login/>
        </Row>
    </div>
    )
}

export default Home