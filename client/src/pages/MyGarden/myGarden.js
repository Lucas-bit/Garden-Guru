import React from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Fence from '../../components/Fence/fence'
import Cards from '../../components/GardenCards'
import NavBar from '../../components/NavBar'
import Title from '../../components/Title/index'

function MyGarden(){
    return(
                <Row>
                    <NavBar/>
                    <Cards />
                </Row>
    )
}

export default MyGarden