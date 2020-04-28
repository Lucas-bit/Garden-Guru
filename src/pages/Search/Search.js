import React, { useState, useEffect } from 'react';
import Searchform from '../../components/searchForm'
import SearchResults from '../../components/SearchCards/index';
import { Row } from '../../components/Grid';
import Hamburger from '../../components/Hamburger/index';

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    if (!term) {
      return;
    }

    setSearch("")
    const key = "dFJuTGR0eWxpTTR5N2xXVTczWlMvZz09"
    const APIurl = "https://cors-anywhere-guanaco.herokuapp.com/https://trefle.io/api/species/?q=" + term + "&token=" + key

    fetch(APIurl, { crossOrigin: true, origin: "http://localhost:3000" })
      .then(res => {
        res.json()
          .then(resp => {
            let plantArr = resp
            setResults(plantArr)

          })
          .catch(err => { throw err })
      }, [results])
      .catch(err => console.log(err));

    setTerm("")
  }, [term,results]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setTerm(search)
  };


  return (
    <React.Fragment>
      <Hamburger />
      <Searchform
        handleFormSubmit={ handleFormSubmit }
        handleInputChange={ handleInputChange }
        term={ search }
      />
      <SearchResults results={ results } />
      </React.Fragment>
  )
};

export default Search;