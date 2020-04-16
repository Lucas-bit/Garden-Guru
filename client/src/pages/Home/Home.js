import React from 'react'
import SucculentPhoto from '../../components/SucculentPhoto'
import Login from '../../components/Login'
import { Col, Row, Container } from '../../components/Grid'

function Home(){
    return(
    <div>
        <Row>
            <SucculentPhoto/>
            <Login/>
        </Row>
    </div>
    )
}

export default Home