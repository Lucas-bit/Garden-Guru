import React, { useState, useEffect } from 'react';
import logo from '../../images/Garden-Guru-Transparent.png'
import './style.css'


function Search() {
return(
  <div>
    <div className="col-xs-12 col-sm-6 col-md-12">
        <div className='content'>
          <h1>4<img className='four-0-four-logo' src={logo}/>4</h1>
        </div>
      <p>Oops! Something is wrong.</p>
      <a className="button" href="#"><i class="icon-home"></i> Go back in initial page, is better.</a>
    </div>
  </div>
)
}
export default Search;