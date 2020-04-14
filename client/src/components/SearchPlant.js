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

//     <div class="wrapper">
//     <div class="wrapper">
//        <header>
//          <h1>Plant Tracker</h1>
//        </header>
//        <div class="ui container track">
//          <div class="ui raised card m-auto">
//            <h2>Add Your Plant</h2>
//            <form action="POST">
//              <div class="plant-type">
//                <label for="type">Plant Type:</label>
//                <select name="type" id="type">
//                  <option disabled selected>Select Plant Type</option>
//                  <option value="resistance">Vegetable</option>
//                  <option value="cardio">could be a flower</option>
//                </select>
//              </div>
//              <div class="vegetable-form d-none">
//                <div class="vegetable-name">
//                  <label for="vegetable-name">Name:</label>
//                  <input type="text" name="vegetable-name" id="vegetable-name" placeholder="Vegetable" />
//                </div>

//              <div class="water">
//                <label for="water">Water(per week):</label>
//                <input type="number" name="water" id="water" placeholder="2" />
//              </div>
//              <div class="weed">
//                <label for="duration">Weed (per week):</label>
//                <input type="number" name="weed" id="weed" placeholder="1" />
//              </div>
//              <div class="prune">
//                <label for="duration">Prune (per week):</label>
//                <input type="number" name="prune" id="prune" placeholder="1" />
//              </div>

//              <div class="harvest">
//                <label for="duration">Harvest (date add):</label>
//                <input type="date" name="harvest" id="weed" placeholder="1" />
//              </div>

//              <div class="fertilize">
//                <label for="duration">Fertilize (date add):</label>
//                <input type="date" name="fertilize" id="fertilize" placeholder="" />
//              </div>
//              <div class="pest">
//                <label for="pest">Pest Control (date add):</label>
//                <input type="date" name="pest" id="pest" placeholder="1" />
//              </div>
//            </div>

//            <div class="buttons">
//              <button disabled class="huge ui blue button complete">
//                Complete
//        </button>
//              <button disabled class="huge ui positive button add-another">
//                Add Plant
//        </button>
//            </div>
//          </form>
//        </div>
//      </div>
//    </div>
//    <div id="toast">
//      Plant Added Successfully!
//  </div>
// )
// }
