import React from 'react'
// import "../styles/SearchFrom.css"

function SearchForm (props) {
  return (
    <form className='search'>
      <div className='form-group'>
        <label htmlFor='plant'>Plant Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name='plant'
          list='plants'
          type='text'
          className='form-control'
          placeholder='Type in a plant name'
          id='plant'
        />
        <datalist id='plants'>
          {props.plants.map((plant, i) => (
            <option value={plant.name} key={i} />
          ))}
        </datalist>
        <button type='submit' onClick={props.handleFormSubmit} className='btn btn-success'>
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm
