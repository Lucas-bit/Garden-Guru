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
                const data = {...event.target.dataset}

                  fetch("/api", {
                    method:"POST",
                    body: JSON.stringify(data),
                    headers: {
                      Authorization: 'Bearer ' + localStorage.getItem('token'),
                      'Content-type': 'application/json'
                    }
                    })
<<<<<<< HEAD
                    .then(alert(`Plant was added to your garden!`))
                    .catch(err=>{console.log(err)})
=======
                    .then(res=>{console.log(res)})
>>>>>>> parent of ee20fe9a... adeed plants,name to mygarden
                      }}>Add {item.common_name} to garden!</button>
          </div>
          </div>
            )) : <li>No Results</li>}
        </div>
      </Row>
  )};

    export default SearchResults;