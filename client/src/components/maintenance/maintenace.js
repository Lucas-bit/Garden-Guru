/*eslint-disable */

import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function Maintenance() {
  return (
    <div className='wrapper'>

      <div className='ui container track'>
        <div className='ui raised card m-auto'>
          <h2>Maintenance Tracker</h2>
        </div>
      </div>
<br/>

<DropdownButton id="dropdown-basic-button" title="Water">
  <Dropdown.Item href="#/action-1">Water Completed</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Opps Delete</Dropdown.Item>
 
</DropdownButton>

<br/>

<DropdownButton id="dropdown-basic-button" title="Weed">
  <Dropdown.Item href="#/action-1">Weeding Completed</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
 
</DropdownButton>

<br/>

<DropdownButton id="dropdown-basic-button" title="Prune">
  <Dropdown.Item href="#/action-1">Pruning Completed</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
 
</DropdownButton>


    </div>
  )
}

export default Maintenance
