import React from "react";
import ReactDOM from "react-dom";
import Search, { handleSubmit } from "../Search/search"

const plants = []

function Searchform(props) {

    return (
        <div>
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
    );
  };

export default Searchform;