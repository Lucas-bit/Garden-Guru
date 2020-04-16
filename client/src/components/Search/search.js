import React, { useState, useEffect } from "react";
import { Col, Row, Container } from '../../components/Grid';
import './style.css'

function SearchResults(props) {

  return (
    <Row>
      <div className="overflow-auto col-6 col-md-6">
      { props.results ? props.results.map(item => (
        <div className="card card-body">
          <div className="welcome-container">
            <h4>{item.common_name}</h4>
              <p>{item.scientific_name}</p>
              <p>{item.family_common_name}</p>
              <button 
              data-id={item.id}
              data-name={item.common_name}
              data-scientific={item.scientific_name}
              onClick={(event)=>{console.log(event.target.dataset)}}>Add {item.common_name} to garden!</button>
          </div>
          </div>
            )) : <li>No Results</li>}
        </div>
      </Row>
  )};

    export default SearchResults;