import React, { Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class App extends Component {
  render () {
    const options = {
      animationEnabled: true,
      title: {
        text: 'Garden Maintenance'
      },
      axisY: {
        title: 'Number of Times',
        interval: 2,
        includeZero: false
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: 'spline',
        name: 'Water',
        showInLegend: true,
        dataPoints: [
          { y: 1, label: 'Jan' },
          { y: 3, label: 'Feb' },
          { y: 4, label: 'Mar' },
          { y: 2, label: 'Apr' },
          { y: 5, label: 'May' },
          { y: 9, label: 'Jun' },
          { y: 15, label: 'Jul' },
          { y: 12, label: 'Aug' },
          { y: 4, label: 'Sept' },
          { y: 0, label: 'Oct' },
          { y: 3, label: 'Nov' },
          { y: 5, label: 'Dec' }
        ]
      },
      {
        type: 'spline',
        name: 'Weed',
        showInLegend: true,
        dataPoints: [
          { y: 5, label: 'Jan' },
          { y: 7, label: 'Feb' },
          { y: 5, label: 'Mar' },
          { y: 2, label: 'Apr' },
          { y: 2, label: 'May' },
          { y: 5, label: 'Jun' },
          { y: 2, label: 'Jul' },
          { y: 8, label: 'Aug' },
          { y: 5, label: 'Sept' },
          { y: 0, label: 'Oct' },
          { y: 5, label: 'Nov' },
          { y: 9, label: 'Dec' }
        ]
      },
      {
        type: 'spline',
        name: 'Prune',
        showInLegend: true,
        dataPoints: [
          { y: 2, label: 'Jan' },
          { y: 0, label: 'Feb' },
          { y: 9, label: 'Mar' },
          { y: 0, label: 'Apr' },
          { y: 2, label: 'May' },
          { y: 5, label: 'Jun' },
          { y: 2, label: 'Jul' },
          { y: 8, label: 'Aug' },
          { y: 5, label: 'Sept' },
          { y: 0, label: 'Oct' },
          { y: 5, label: 'Nov' },
          { y: 1, label: 'Dec' }
        ]
      }
      ]
    }

    return (
      <div>
          <div style={{width: '50%'}}>
<CanvasJSChart options={options} style={{width: '50%'}} />

		  </div>
      </div>
    )
  }
}

export default App
