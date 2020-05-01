import React, { Component } from 'react'
import Cards from '../../components/GardenCards'
import Hamburger from '../../components/Hamburger/index'
import './style.css'

export default class Home extends Component {

    constructor(props) {
      super(props)
      this.state = { name: "", plants: [] }
    }
  
    componentDidMount() {
      fetch('/api/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => {
        return res.json()
        
      }).then(user=>{
        let name = user.name
        let plants = user.plants
        
        this.setState({name: name, plants:plants})
        
      })
      .catch(err => {
        console.error(err)
      })
    }
  
    componentDidUpdate() {
      fetch('/api/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => {
        return res.json()
        
      }).then(user=>{
        let plants = user.plants
        
        this.setState({ plants:plants})
        
      })
      .catch(err => {
        console.error(err)
      })
    }
  
    render() {
      let name = this.state.name
      let plants = this.state.plants
  
    return(
    <div>
        <Hamburger/>
        <Cards plants={ plants } name={name} />
    </div>
    )
}}