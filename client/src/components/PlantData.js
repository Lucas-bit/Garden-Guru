import React from "react";
// import "../styles/PlantData.css";

function PlantData({ users }) {
  function formatDate(date) {
    const water = //number per week
    const weed = //number per week
    const prune =// number per week

    const harvest = //date when
    const fertilize = //date when;
    const pestControl = //date when;
    return formattedDate;
  }

  return (
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ water, weed, prune, harvest, fertilize, pestControl }, index) => {
          return (
            <div> 
            // this to return as a graph
            <div class="water">
              <label for="water">Water(per week):</label>
              <input type="number" name="water" id="water" placeholder="2" />
            </div>
            <div class="weed">
              <label for="duration">Weed (per week):</label>
              <input type="number" name="weed" id="weed" placeholder="1" />
            </div>
            <div class="prune">
              <label for="duration">Prune (per week):</label>
              <input type="number" name="prune" id="prune" placeholder="1" />
            </div>

            // this to return on a calendar
            
            <div class="harvest">
              <label for="duration">Harvest (date add):</label>
              <input type="date" name="harvest" id="weed" placeholder="1" />
            </div>

            <div class="fertilize">
              <label for="duration">Fertilize (date add):</label>
              <input type="date" name="fertilize" id="fertilize" placeholder="" />
            </div>
            <div class="pest">
              <label for="pest">Pest Control (date add):</label>
              <input type="date" name="pest" id="pest" placeholder="1" />
            </div>
    </div>
   
     );
}

export default PlantData
