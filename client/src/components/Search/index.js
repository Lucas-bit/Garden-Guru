import React from "react";
import { Row } from '../Grid';
import './style.css'

function SearchResults(props) {

  return (
    <Row>
      <div className="overflow-auto col-6 col-md-6">
      { props.results ? props.results.map(item => (
        <div key={item.id} className="card card-body">
          <div className="welcome-container">
            <h4>{item.common_name}</h4>
              <p>{item.scientific_name}</p>
              <p>{item.family_common_name}</p>
              <button 
              data-id={item.id}
              data-name={item.common_name}
              data-scientific={item.scientific_name}
              onClick={(event)=>{
                console.log(event.target.dataset)
                  fetch("http://localhost:3001/api", {
                    crossOrigin: true,
                    origin: "http://localhost:3000/search",
                    method:"POST",
                    body: event.target.dataset
                      })
                  .then(response=>{console.log(response)})
                      }}>Add {item.common_name} to garden!</button>
          </div>
          </div>
            )) : <li>No Results</li>}
        </div>
      </Row>
  )};

    export default SearchResults;