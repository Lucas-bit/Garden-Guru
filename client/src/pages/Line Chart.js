/*eslint-disable */
import React, { Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
import Axios from 'axios'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class App extends Component {

  state = {

    options: null
  }
// call the server and request all the maintenance entries
  componentDidMount() {
    Axios.get('/api/maintenance').then(function (response) {
      this.setState({ options: response.data })
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

export default App
