import React, { useState, useEffect } from "react";

function SearchResults(props) {

 
    

  return (
    <div>
        <ul>
            { props.results ? props.results.map(item => (<li>{item.common_name}</li>)) : <li>No Results</li>}
        </ul>
    </div>
  
  )};

    export default SearchResults;