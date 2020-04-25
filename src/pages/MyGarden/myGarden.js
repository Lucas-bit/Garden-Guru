import { Col, Container, Row } from '../../components/Grid'
import Cards from '../../components/GardenCards'
import Hamburger from '../../components/Hamburger/index'
import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { user: "" }
  }

  componentDidMount() {
    fetch('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res.json())
    //   return res.json()
    // }).then(user => {
    //   
    }).then(user=>{
      console.log(user)

      this.setState(user[0].username)
    })
    .catch(err => {
      console.error(err)
    })
  }



  render() {
    let username = this.state.user.username
    return(
                <Row>
                    <Hamburger/>
                    <p>Welcome to Home, {username}.</p>

                    <Cards />
                </Row>
    )
}}