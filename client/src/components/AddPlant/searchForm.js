import React from "react";
import ReactDOM from "react-dom";
import Search, { handleSubmit } from "../Search/search"
import Title from '../Title'
import './style.css'


const plants = []

function Searchform(props) {

    return (
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
    );
  };

export default Searchform;