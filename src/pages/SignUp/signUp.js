import React from 'react'
import Register from '../../components/Register'
import GrowPhoto from '../../components/GrowPhoto'
import { Row } from '../../components/Grid'

function SignUp(){
    return(
            <Row>
                <Register/>
                <GrowPhoto/>
            </Row>
    )
}

export default SignUp