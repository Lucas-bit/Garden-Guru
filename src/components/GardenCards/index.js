import React, { useReducer } from 'react'
import './style.css'
import Logo from '../../images/Garden-Guru-Transparent.png'
import returnPlantCard from '../SearchCards/index'
import potted from '../../images/pottedSucculent.png'

function myServices(props){

    
    
const plantCards = props.plants

    //setPlantCards(returnPlantCard)


//create fake dataset from data that currently have then have ract build up the cards from the data set

const handleClick = (e)=>{
//  console.log(e.currentTarget.dataset.name)
let data = e.target.dataset.id
const newCards = plantCards.filter(card => card.name !== e.currentTarget.dataset.name)
fetch(`/api/plant/${data}`, {
    params: data,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
.then(alert("DELETED"))
}


return(
<React.Fragment>
    <div className="bigContainer"   >
        <h1 className = 'myGarden-title'><span><img className ="myGarden-logo" src={Logo}/></span>MY GARDEN<span><img className ="myGarden-logo" src={Logo}/></span></h1>
        <div id="services" className="services-area section-padding">
        <p className="welcome-name">Welcome home, { props.name }</p>

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
                {props.plants.map(({ _id, name, type, height }) => {
                return (
                <div key={ _id } className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                        <img src={potted} className="services-icon"/>
                        <div className="services-content">
                        <button onClick={handleClick} data-name = {name} data-id = {_id} className = "delete">X</button> 
                            <h3>{ name }</h3> 
                        </div>
                    </div>
                </div>)})}
            </div>
        </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default myServices