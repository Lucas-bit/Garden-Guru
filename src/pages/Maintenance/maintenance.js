/*eslint-disable */
import React from 'react'
import { DropdownButton, Dropdown, Col, Row } from 'react-bootstrap'
import Chart from './LineChart'
import axios from 'axios';
import moment from 'moment';
import Hamburger from '../../components/Hamburger'
import Logo from '../../images/Garden-Guru-Transparent.png'
import './style.css'



class Maintenance extends React.Component {
  constructor() {
    super()

    this.chart = React.createRef();
    this.state = {}
  }
  addEntry(entry) {
    // adds a new entry to database, takes in a type
    fetch('/api/maintenance', {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ type: entry })
    })
      .then(res => {
        res.json()
      })
  }

  componentDidUpdate() {
    // intial call to db on page load to retreive all entries
    axios.get('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-type': 'application/json'
      }
    })
      .then(data => {
        let parsedArr = data.data.maintenance.map(entry => {
          let month = moment(entry.data).format('M');
          // console.group(month)

          return {
            type: entry.type,
            month: month
          }
        })

        var count = {
          0: {},
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
        }
        var data = [{
          dataPoints: [

          ],
          name:
            "Water",
          showInLegend:
            true,
          type:
            "spline"

        },
        {
          dataPoints: [



          ],
          name:
            "Weed",
          showInLegend:
            true,
          type:
            "spline"

        },
        {
          dataPoints: [],
          name:
            "Prune",
          showInLegend:
            true,
          type:
            "spline"


        }]
        // gets month and add to the count
        parsedArr.forEach(element => {

          var type = element.type
          var month = element.month
          if (!count[month]) {
            count[month] = {}
          }
          switch (type) {
            case 'water':
              if (count[month].waterCount) {
                count[month].waterCount++
              } else {
                count[month].waterCount = 1
              }
              break;
            case 'prune':
              if (count[month].pruneCount) {
                count[month].pruneCount++
              } else {
                count[month].pruneCount = 1
              }
              break;
            case 'weed':
              if (count[month].weedCount) {
                count[month].weedCount++
              } else {
                count[month].weedCount = 1
              }
              break;
          }


        });

        //pushing data to chart (not pushing)
        for (var month in count) {
          var d = new Date();
          d.setMonth(month);
          var m = d.getMonth()
          month = parseInt(month)
          switch (month) {
            case 0:
              m = 'Jan';
              break;
            case 1:
              m = 'Feb';
              break;
            case 2:
              m = 'Mar';
              break;
            case 3:
              m = 'Apr';
              break;
            case 4:
              m = 'May';
              break;
            case 5:
              m = 'Jun'
              break;
            case 6:
              m = 'Jul';
              break;
            case 7:
              m = 'Aug';
              break;
            case 8:
              m = 'Sep';
              break;
            case 9:
              m = 'Oct';
              break;
            case 10:
              m = 'Nov'
              break;
            case 11:
              m = 'Dec';
              break;
          }

          data[0].dataPoints.push({
            label: m, x: parseInt(month), y: count[month].waterCount || null
          })

          data[1].dataPoints.push({
            label: m,
            x: parseInt(month),
            y: count[month].weedCount || null
          })

          data[2].dataPoints.push({
            label: m,
            x: parseInt(month),
            y: count[month].pruneCount || null
          })
        }
        this.setState({ options: { ...this.state.options, data } })
      })
  }

  componentDidMount() {
    // intial call to db on page load to retreive all entries
    axios.get('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-type': 'application/json'
      }
    })
      .then(data => {
        let parsedArr = data.data.maintenance.map(entry => {
          let month = moment(entry.data).format('M');
          // console.group(month)

          return {
            type: entry.type,
            month: month
          }
        })

        var count = {
          0: {},
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
        }
        var data = [{
          dataPoints: [

          ],
          name:
            "Water",
          showInLegend:
            true,
          type:
            "spline"

        },
        {
          dataPoints: [



          ],
          name:
            "Weed",
          showInLegend:
            true,
          type:
            "spline"

        },
        {
          dataPoints: [],
          name:
            "Prune",
          showInLegend:
            true,
          type:
            "spline"


        }]
        // gets month and add to the count
        parsedArr.forEach(element => {

          var type = element.type
          var month = element.month
          if (!count[month]) {
            count[month] = {}
          }
          switch (type) {
            case 'water':
              if (count[month].waterCount) {
                count[month].waterCount++
              } else {
                count[month].waterCount = 1
              }
              break;
            case 'prune':
              if (count[month].pruneCount) {
                count[month].pruneCount++
              } else {
                count[month].pruneCount = 1
              }
              break;
            case 'weed':
              if (count[month].weedCount) {
                count[month].weedCount++
              } else {
                count[month].weedCount = 1
              }
              break;
          }


        });

        //pushing data to chart (not pushing)
        for (var month in count) {
          var d = new Date();
          d.setMonth(month);
          var m = d.getMonth()
          month = parseInt(month)
          switch (month) {
            case 0:
              m = 'Jan';
              break;
            case 1:
              m = 'Feb';
              break;
            case 2:
              m = 'Mar';
              break;
            case 3:
              m = 'Apr';
              break;
            case 4:
              m = 'May';
              break;
            case 5:
              m = 'Jun'
              break;
            case 6:
              m = 'Jul';
              break;
            case 7:
              m = 'Aug';
              break;
            case 8:
              m = 'Sep';
              break;
            case 9:
              m = 'Oct';
              break;
            case 10:
              m = 'Nov'
              break;
            case 11:
              m = 'Dec';
              break;
          }

          data[0].dataPoints.push({
            label: m, x: parseInt(month), y: count[month].waterCount || null
          })

          data[1].dataPoints.push({
            label: m,
            x: parseInt(month),
            y: count[month].weedCount || null
          })

          data[2].dataPoints.push({
            label: m,
            x: parseInt(month),
            y: count[month].pruneCount || null
          })
        }

        this.setState({ options: { ...this.state.options, data } })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Hamburger />
        <h1 className='myMaintenance-title'><span><img className="myMaintenance-logo" src={Logo} /></span>MY MAINTENANCE<span><img className="myMaintenance-logo" src={Logo} /></span></h1>
        <Chart options={this.state.options}
          onRef={ref => this.char = ref} />


<div className="justify-content-md-center">
  <div className="row button-row">
          {/* <Row lg="3" > */}
            

        <div className = "col-xs-12 col-sm-6 col-lg-3 column-width">
            <DropdownButton id="dropdown-basic-button" title="Water" >
              <Dropdown.Item onClick={() => this.addEntry("water")} href="#/action-1">Water Completed</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Opps Delete</Dropdown.Item> */}

            </DropdownButton>
            </div>


            <div className = "col-xs-12 col-sm-6 col-lg-3 column-width">
            <DropdownButton id="dropdown-basic-button" title="Weed">
              <Dropdown.Item onClick={() => this.addEntry('weed')} href="#/action-1">Weeding Completed</Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">Delete</Dropdown.Item> */}

            </DropdownButton>
            </div>


            <div className = "col-xs-12 col-sm-4 col-lg-3 column-width">
            <DropdownButton id="dropdown-basic-button" title="Prune">
              <Dropdown.Item onClick={() => this.addEntry("prune")} href="#/action-1">Pruning Completed</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Delete</Dropdown.Item> */}

            </DropdownButton>
            </div>
          {/* </Row> */}
          </div>
          </div>
      </React.Fragment>

    )
  }
}

export default Maintenance
