import React from "react";
import { toast } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import './style.css'


toast.configure({})
function SearchResults(props) {

  let res = props.results;
  console.log(res);
  
  const notify = () => {
    toast.info('Plant Added Successfully',{})
}

  return (
    <React.Fragment>
      <div id="services" className="services-area section-padding col-xs-12 col-sm-6 col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <p className="line1"></p>
                <p className="line2"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-12">
              {props.results ?
                props.results === [] ? <p>test</p> :
                  props.results === "none" ? <p className="no-results">Sorry we dont have that plant in our records yet, hopefully it will be added soon as our library is ever growing!</p> :
                    props.results.map(item => (
                      <div key={item.id} className="plant-card single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                        <div className="services-content">
                          <h4 className='common-name'>{item.common_name}</h4>
                          <h4>{item.scientific_name}</h4>
                          <p>{item.family_common_name}</p>

                     
                        <toastFunction/>
                          <button className='common-name add-button'
                            data-id={item.id}
                            data-name={item.common_name}
                            data-scientific={item.scientific_name}
                            onClick={(event) => {
                              const data = { ...event.target.dataset }
                              
                              fetch("/api", {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                  Authorization: 'Bearer ' + localStorage.getItem('token'),
                                  'Content-type': 'application/json'
                                }
                              }).then(notify())
                                .catch(err => { console.log(err) })
                            }}>Add {item.common_name} to my garden!
                            </button>
                        </div>

                      </div>
                    )) : null
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default SearchResults;
