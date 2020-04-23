/*eslint-disable */
import React, { Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
import axios from 'axios'
import options from './testData'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Chart extends Component {
constructor(){
  super();
  this.state={
    options:options
  }
}

// call the server and request all the maintenance entries
  componentDidMount() {
    console.log('Component did Mount')
    axios.get('/api/maintenance').then((response) =>{
    // this.setState({ options: response.data })
    console.log(response)
    })
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <div style={{ width: '50%' }}>
            <CanvasJSChart options={this.state.options} style={{ width: '50%' }} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Chart
