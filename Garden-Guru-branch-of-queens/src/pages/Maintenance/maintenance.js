/*eslint-disable */
import React from 'react'
import { DropdownButton, Dropdown, Col, Row } from 'react-bootstrap'
import Chart from '../../pages/Maintenance/LineChart'
import axios from 'axios';
import moment from 'moment';
import options from '../../pages/Maintenance/testData';



class Maintenance extends React.Component {
  constructor() {
    super()

    this.chart = React.createRef();
    this.state = {
      options
    }
  }
  addEntry(entry) {
    // adds a new entry to database, takes in a type
    axios.post('/api/user/maintenance', { type: entry })
      .then(res => {
        console.log(res)
      })
  }


  componentDidMount() {

   
    // intial call to db on page load to retreive all entries
    axios.get('/api/maintenance', {headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-type': 'application/json'
      }})
      .then(data => {
        console.log(data.data)
        let parsedArr = data.data.map(entry => {
          console.log(entry.date)
          let month = moment(entry.data).format('M');
         // console.group(month)

          return {
            type: entry.type,
            month: month
          }
        })

        console.log(parsedArr)
        var count = {
          0: {},
          1: {},
          2:{},
          3:{},
          4:null,
          5:{},
          6:{},
          7:{},
          8:{},
          9:{},
          10:{},
          11:{},
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
          console.log(m)
console.log('month: ', month)
month = parseInt(month)
          switch(month){
            case 1:
              m = 'Jan';
              break;
            case 2:
              m = 'Feb';
              break;
            case 3:
              m = 'Mar';
              break;
            case 4:
              m = 'Apr';
               break;
            case 5:
              m = 'May';
              break;
            case 6:
              m = 'Jun'
              break;
            case 7:
              m = 'Jul';
              break;
            case 8:
              m = 'Aug';
              break;
            case 9:
              m = 'Sep';
              break;
            case 10:
              m = 'Oct';
              break;
            case 11:
              m = 'Nov'
              break;
            case 12:
              m = 'Dec';
              break;
          }
          
          console.log('m: ', m)

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
        console.log(count)

        console.log(data)
        this.setState({ options: { ...this.state.options,  data } })
      })
  }

  render() {
    return (


      
      <div className="wrapper">


        <div className='ui container track'>
          <div className='ui raised card m-auto'>
          

              <h2>Garden Guru Tracker</h2>
            
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

        <Chart options={this.state.options} 
          onRef={ref =>this.char = ref}/>
     
      </div>
    )
  }
}

export default Maintenance
