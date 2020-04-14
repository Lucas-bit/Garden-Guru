import React, { useState, useEffect } from "react";
import './style.css'

function SearchResults(props) {

 
    

  return (
    <div>
      { props.results ? props.results.map(item => (
        <div className="card card-body">
          <div className="welcome-container">
            <h4>{item.common_name}</h4>
              <p>{item.scientific_name}</p>
              <p>{item.family_common_name}</p>
          </div>
          </div>
            )) : <li>No Results</li>}
      </div>
  )};

    export default SearchResults;