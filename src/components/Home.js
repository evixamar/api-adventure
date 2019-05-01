import React, { Component } from 'react'
import Nasa from '../components/Nasa'
import Nav from '../components/Nav'

class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Nasa />
      </>
    )
  }
}

export default Home
