import React, { Component } from 'react'
import AppBar from './AppBar'
import Footer from './Footer'
import Body from './Body'

export default class App extends Component {
  state = {
    viewed: false,
  }
  render() {
    return (
      <div>
        <AppBar onClick={() => this.setState({ viewed: true })} />
        {this.state.viewed ? (
          <>
            <Body />
            <Footer />
          </>
        ) : null}
      </div>
    )
  }
}
