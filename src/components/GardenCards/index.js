import React from 'react'
import './style.css'
import Logo from '../../images/Garden-Guru-Transparent.png'

const plantCards = [
    {
        id: 1,
        name: 'tree',
        type: 'coniferious',
        height: '2 meters'
    },

function myServices(props){
        <React.Fragment>
        <div className="bigContainer"   >
        <h1 className = 'myGarden-title'><span><img className ="myGarden-logo" src={Logo}/></span>MY GARDEN<span><img className ="myGarden-logo" src={Logo}/></span></h1>
          <div id="services" className="services-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header">
                            <p className="line1"></p>
                            <p className="line2"></p>
                        </div>
                    </div>
                </div>
                <div className="row">
        {plantCards.map(({ id, name, type, height }) => {
             return (

       
                    <div key={id} className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                            <div className="services-icon">
                                <i className="fa fa-users"></i>
                            </div>
<<<<<<< HEAD
                            <div className="row">
                                {props.plants.map(({ _id, name, type, height }) => {
                                    return (
                                        <div key={_id} className="col-xs-12 col-sm-6 col-md-4">
                                            <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                                                <div className="services-icon">
                                                    <i className="fa fa-users"></i>
                                                </div>
                                                <div className="services-content">
                                                    <h3>{ name }</h3> 
                                                </div>
                                            </div>
                                        </div>
                                            )})}
=======
                            <div className="services-content">
                                <h3>{name}</h3> 
>>>>>>> parent of ee20fe9a... adeed plants,name to mygarden
                            </div>
                        </div>
                    </div>
             )}
            )}
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default myServices