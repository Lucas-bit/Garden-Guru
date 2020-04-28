import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD:src/components/searchForm/index.js
import Logo from '../../images/Garden-Guru-Transparent-Tiny.png'
import {InputGroup, FormControl, Button } from 'react-bootstrap'
=======
import Title from '../Title'
>>>>>>> parent of ee20fe9a... adeed plants,name to mygarden:src/components/searchForm/searchForm.js
=======
import Title from '../Title'
>>>>>>> parent of ee20fe9a... adeed plants,name to mygarden
import './style.css'




function Searchform(props) {

    return (
<<<<<<< HEAD
    <React.Fragment>
    <div className= "card-and-title-container col-xs-12 col-sm-12 col-md-12">
        <div className= "card-title">
            <h1 className = 'search-title'><span><img className ="search-logo" src={Logo} alt="Succulent Logo"/></span>SEARCH PLANTS<span><img className ="search-logo" src={Logo}alt="Succulent Logo"/></span></h1>
            <div className= "welcome-container">
                <form className = "search-form">
                        <div className="inner-form"> 
                        
                            <div className = "other-inner-form">
                            
                                <div className ="plantname">
                               

                                <InputGroup className="mb-3 search-group">
                                <FormControl
                                placeholder="Enter a plant!" 
                                    className ="input-box form-control input"
                                    type="text"
                                    value={props.search}
                                    name="search"
                                    onChange= {props.handleInputChange}
                                />
                                <InputGroup.Append>
                                    <Button 
                                        variant="outline-secondary"
                                        id="search-button" 
                                        className="button form-control"
                                        onClick={props.handleFormSubmit}
                                        >Search
                                    </Button>
                                </InputGroup.Append>
                                </InputGroup>

                
                                </div>
                            </div>
                        </div>
                    </form>  
                </div>
            </div>
        </div>
        
    </React.Fragment>
=======
        <React.Fragment>
        <div className= "card-and-title-container col-md-6">
        <div className= "card-title">
      <Title/>
        <div className= "welcome-container">
               <form className = "search-form">
                <div className="inner-form"> 
                
                    <div className = "other-inner-form">
                    
                        <div className ="plantname">
                         <input 
                            placeholder="Search for a plant!" 
                            className ="input"
                            type="text"
                            value={props.search}
                            name="search"
                            onChange= {props.handleInputChange}
                            />
                        </div> 
                        <div>
                        <button 
                            id="search-button" 
                            className="button"
                            onClick={props.handleFormSubmit}
                        > Search </button>
                        </div>
                    </div>
                </div>
                </form>  
            </div>
            </div></div>
            </React.Fragment>
>>>>>>> parent of ee20fe9a... adeed plants,name to mygarden
    );
  };

export default Searchform;