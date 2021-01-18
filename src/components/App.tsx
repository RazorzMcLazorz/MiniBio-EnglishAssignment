import React, { Component } from 'react'
import AppBar from './AppBar'
import Footer from './Footer'
import Body from './Body'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Body />
        <Footer />
      </div>
    )
  }
}
