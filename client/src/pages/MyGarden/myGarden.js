import React from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Cards from '../../components/GardenCards'
import Hamburger from '../../components/Hamburger/index'

function MyGarden(){
    return(
                <Row>
                    <Hamburger/>
                    <Cards />
                </Row>
    )
}

export default MyGarden