import React, { useReducer } from 'react'
import Logo from '../../images/Garden-Guru-Transparent.png'
import returnPlantCard from '../SearchCards/index'
import potted from '../../images/pottedSucculent.png'
import { toast } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

//Toast Configuration
toast.configure({})



//Cards Function
function myServices(props){

//Toast Notification Function
const notify = () => {
    toast.info('Plant removed from your garden successfully',{})
}

const plantCards = props.plants

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
.then(notify())
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
                            <h3 className="plant-name">{ name }</h3> 
                            <button onClick={handleClick} data-name = {name} data-id = {_id} className = "delete-plant">Remove</button> 
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