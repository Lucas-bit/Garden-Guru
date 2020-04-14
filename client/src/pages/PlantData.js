import React from 'react';

import SearchPlant from '../components/SearchPlant';

function PlantData() {
  return (
    <div className="App">
<SearchPlant plants={[{name:'Fern'}]} />
    </div>
  );
}

export default PlantData;