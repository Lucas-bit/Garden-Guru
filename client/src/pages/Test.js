import React from 'react'

function PlantData () {
  return (
    <div class='wrapper'>
      <header>
        <h1>Plant Tracker</h1>
      </header>
      <div class='ui container track'>
        <div class='ui raised card m-auto'>
          <h2>Add Your Plant</h2>
          <form action='POST'>

            <div class='vegetable-form d-none'>
              <div class='vegetable-name'>
                <label for='vegetable-name'>Plant Search:</label>
                <input type='text' name='vegetable-name' id='vegetable-name' placeholder='Vegetable' />
              </div>
              <div class='buttons'>
                <button disabled class='huge ui blue button complete'>
                Search Plants
                </button>
                <h4>Plant name return: </h4>

              </div>

              <div class='water'>
                <label for='water'>Water(per week):</label>
                <input type='number' name='water' id='water' placeholder='2' />
              </div>
              <div class='weed'>
                <label for='duration'>Weed (per week):</label>
                <input type='number' name='weed' id='weed' placeholder='1' />
              </div>
              <div class='prune'>
                <label for='duration'>Prune (per week):</label>
                <input type='number' name='prune' id='prune' placeholder='1' />
              </div>

              <div class='harvest'>
                <label for='duration'>Harvest (date add):</label>
                <input type='date' name='harvest' id='weed' placeholder='1' />
              </div>

              <div class='fertilize'>
                <label for='duration'>Fertilize (date add):</label>
                <input type='date' name='fertilize' id='fertilize' placeholder='' />
              </div>
              <div class='pest'>
                <label for='pest'>Pest Control (date add):</label>
                <input type='date' name='pest' id='pest' placeholder='1' />
              </div>
            </div>

            <button disabled class='huge ui positive button add-another'>
            Add Plant
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlantData
