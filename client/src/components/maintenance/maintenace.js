/*eslint-disable */

import React from 'react'
import { DropdownButton, Dropdown, Col, Row } from 'react-bootstrap'
import Chart from '../../pages/Line Chart'
import axios from 'axios';
import moment from 'moment';
import options from '../../pages/testData';


class Maintenance extends React.Component {
  constructor() {
    super()
    this.state = {
      options
    }
  }
  addEntry(entry) {
    // adds a new entry to database, takes in a type
    axios.post('/api/maintenance', { type: entry })
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount() {
    // intial call to db on page load to retreive all entries
    axios.get('/api/maintenance')
      .then(data => {
        console.log(data.data)
        let parsedArr = data.data.map(entry => {
          console.log(entry.date)
          let month = moment(entry.data).format('M');
          console.group(month)

          return {
            type: entry.type,
            month: month
          }
        })

        console.log(parsedArr)
        var count = {}
        var data = [{
          dataPoint: [],
          name:
            "Water",
          showInLegend:
            true,
          type:
            "spline"

        },
        {
          dataPoint: [],
          name:
            "Weed",
          showInLegend:
            true,
          type:
            "spline"


        },
        {
          dataPoint: [],
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
          console.log(m)
          if (month == 4) {
            m = 'April'
          }

          data[0].dataPoint.push({
            label: m, x: parseInt(month), y: count[month].waterCount
          }),
            data[1].dataPoint.push({
              label: m,
              x: parseInt(month),
              y: count[month].weedCount
            }),
            data[2].dataPoint.push({
              label: m,
              x: parseInt(month),
              y: count[month].pruneCount
            })
        }
        console.log(count)

        console.log(data)
        this.setState({ options: { ...this.state.options, data } })
      })
  }

  render() {
    return (

      <div className="wrapper">


        <div className='ui container track'>
          <div className='ui raised card m-auto'>
            <card text='text-align center'>

              <h2>Garden Guru Tracker</h2>
            </card>
          </div>
        </div>


        <br />

        <Row className="justify-content-md-center">
          <Row lg="3" >
            <Col></Col>
            <Col></Col>
            <Col></Col>


            <DropdownButton id="dropdown-basic-button" title="Water" >
              <Dropdown.Item onClick={() => this.addEntry("water")} href="#/action-1">Water Completed</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Opps Delete</Dropdown.Item> */}

            </DropdownButton>



            <DropdownButton id="dropdown-basic-button" title="Weed">
              <Dropdown.Item onClick={() => this.addEntry('weed')} href="#/action-1">Weeding Completed</Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">Delete</Dropdown.Item> */}

            </DropdownButton>



            <DropdownButton id="dropdown-basic-button" title="Prune">
              <Dropdown.Item onClick={() => this.addEntry("prune")} href="#/action-1">Pruning Completed</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Delete</Dropdown.Item> */}

            </DropdownButton>
          </Row>

        </Row>
        <br />

        <Chart options={this.state.options} />

      </div>
    )
  }
}

export default Maintenance
