import React from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Cards from '../../components/GardenCards'
import Hamburger from '../../components/Hamburger/index'

function MyGarden(){
    return(
    <div>
        <Hamburger/>
        <Cards />
    </div>
    )
}

export default MyGarden