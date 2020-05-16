import React, { Component } from 'react'
import './stats'

function maintenanceDashboard(props){
    
return(
<React.Fragment>
    <div class="container mt">
      <h1 class="text-center">Workout Dashboard</h1>
      <div class="row mt">
        <div class="col-md-6">
          <canvas id="canvas"></canvas>
        </div>
        <div class="col-md-6">
          <canvas id="canvas2"></canvas>
        </div>
      </div>
      <div class="row mt">
        <div class="col-md-6">
          <canvas id="canvas3"></canvas>
        </div>
        <div class="col-md-6">
          <canvas id="canvas4"></canvas>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="/api.js"></script>
    <script src="/stats.js"></script>
</React.Fragment>
)} 

export default maintenanceDashboard()