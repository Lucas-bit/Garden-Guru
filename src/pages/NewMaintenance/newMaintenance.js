import React from 'react'
import Hamburger from '../../components/Hamburger/index'
import maintenanceDashboard from '../../components/maintenanceDashboard'

function newMaintenancePage(){
    return(
        <React.Fragment>
            <Hamburger/>
            <maintenanceDashboard/>
        </React.Fragment>
    )
}

export default newMaintenancePage()