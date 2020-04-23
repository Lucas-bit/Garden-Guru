import React from "react";
import { Row } from '../Grid';
import './style.css'

function SearchResults(props) {

  return (
<React.Fragment>



    {/* <div key={id} className="col-xs-12 col-sm-6 col-md-4">
    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
        <div className="services-icon">
            <i className="fa fa-users"></i>
        </div>
        <div className="services-content">
            <h3>{name}</h3> 
        </div>
    </div>
</div> */}

<div id="services" className="services-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header">
                            <p className="line1"></p>
                            <p className="line2"></p>
                        </div>
                    </div>
                </div>
                  <div className= "row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                    { props.results ? props.results.map(item => (
                      <div key={item.id} className="plant-card single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                        <div className="services-content">
                          <h4 className='common-name'>{item.common_name}</h4>
                            <h4>{item.scientific_name}</h4>
                            <p>{item.family_common_name}</p>
                              <button className='common-name add-button'
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
                                      }}>Add {item.common_name} to my garden!
                                </button>
                          </div>
                        </div>
                          )) : <li>No Results</li>}
                      </div>
                    </div>
                  </div>
                </div>
      </React.Fragment>
)};

    export default SearchResults;