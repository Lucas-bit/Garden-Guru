import React, { useState, useEffect } from 'react';
import logo from '../../images/Garden-Guru-Transparent.png'
import './style.css'
import { MDBNavLink } from 'mdbreact';


function Search() {
return(
  <div>
    <div className="col-xs-12 col-sm-6 col-md-12">
        <div className='failed-search-content'>
          <h1 className="number4">4<img className='four-0-four-logo' src={logo}/>4</h1>
        </div>
        
      <div className="oops">Oops! It looks like you wondered off path.
      <br></br>
          <MDBNavLink className="return-button" to="/mygarden">
          Return to your garden, your plants miss you.
            </MDBNavLink> 
            
        </div>
    </div>
  </div>
  
)
}
export default Search;