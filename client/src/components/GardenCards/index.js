import React from 'react'
import './style.css'
import Logo from '../../images/Garden-Guru-Transparent.png'

function myServices(){
    return(
        <React.Fragment>
        <h1 className = 'myGarden-title'><span><img className ="myGarden-logo" src={Logo}/></span>MY GARDEN<span><img className ="myGarden-logo" src={Logo}/></span></h1>
        <div className="bigContainer"   >
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
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                            <div className="services-icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 1</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="0.4s">
                            <div className="services-icon">
                                <i className="fa fa-bar-chart"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 2</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="0.6s">
                            <div className="services-icon">
                                <i className="fa fa-desktop"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 3</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="0.8s">
                            <div className="services-icon">
                                <i className="fa fa-area-chart"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 4</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="1.2s">
                            <div className="services-icon">
                                <i className="fa fa-camera"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 5</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="single-services text-center wow fadeInDown" data-wow-delay="1.2s">
                            <div className="services-icon">
                                <i className="fa fa-pied-piper-alt"></i>
                            </div>
                            <div className="services-content">
                                <h3>Plant 6</h3> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default myServices