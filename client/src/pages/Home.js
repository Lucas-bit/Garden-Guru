import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Login from '../components/Login'
import { Col, Row, Container } from '../components/Grid'

function Home(){
    return(
    <div>
        <Row>
        <Col size='med-12'>
        <About/>
        </Col>
        <Login/>
        </Row>
    </div>
    )
}

export default Home