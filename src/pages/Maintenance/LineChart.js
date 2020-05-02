/*eslint-disable */
import React, { Component } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import axios from 'axios'
import hamburgerMenuPage from '../../components/Hamburger';


// var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Chart extends Component {
  constructor( ){
  super();
  this.state={  }
}

// call the server and request all the maintenance entries
  componentDidMount() {
    console.log('Component did Mount')
    axios.get('/api/user', {headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-type': 'application/json'
    }})
       .catch(err=>{console.error(err)})
        // this.setState({ options: response.data })
  
    

   
  }

  render() {

    return (
  
        <React.Fragment>
          <div style={{ width: '50%', marginLeft: "25%", marginRight: "25%", marginBottom:"20px" }}>
            <CanvasJSChart options={this.props.options} />
          </div>
          </React.Fragment>
    
    )
  }
}

export default Chart
