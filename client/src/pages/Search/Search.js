import React, { useState, useEffect } from 'react';
import Searchform from '../../components/searchForm/searchForm'
import SearchResults from '../../components/Search/index';
// import SucculentPhoto from '../../components/SucculentPhoto'
import { Row } from '../../components/Grid';
import Hamburger from '../../components/Hamburger/index';

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([""]);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const [plants, setPlants] = useState([]); //if to push back to the app.js and pass the actual plant object to the garden

  const handlePlantChange = (plant, event) => {
    const newPlants = [...plants, plant]  //taking original planst and binding them together and saving them to a new plant instance of plants 
    setPlants(newPlants)
    console.log(event.target.dataset)
    fetch("http://localhost:3001/api", {
      crossOrigin: true,
      origin: "http://localhost:3000/search",
      method: "POST",
      body: plant
    })
      .then(response => { 
        console.log(response) 
        console.log(plants)
      })
      
  };

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {


    if (!term) {
      return;
    }

    setSearch("")
    console.log(search)
    const key = "dFJuTGR0eWxpTTR5N2xXVTczWlMvZz09"
    const APIurl = "https://cors-anywhere-guanaco.herokuapp.com/https://trefle.io/api/species/?q=" + term + "&token=" + key

    fetch(APIurl, { crossOrigin: true, origin: "http://localhost:3000" })
      .then(res => {
        res.json()
          .then(resp => {
            // if (resp.length === 0) {
            //   throw new Error("No results found.");
            // }
            // if (resp.status === "error") {
            //   throw new Error(res.data.message);
            // }
            let plantArr = resp
            setResults(plantArr)

          }).catch(err => { throw err })
      }, [results])
      .catch(err => setError(err));

    setTerm("")

    console.log(term)
    console.log(search)

  });

  const clearForm = () => {
    setSearch("")
  }
  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setTerm(search)
  };


  return (
    <div>
      <Hamburger />
      <Searchform
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        term={search}
      />
      <SearchResults results={results} handlePlantChange={handlePlantChange} />
    </div>
  )
};

export default Search;