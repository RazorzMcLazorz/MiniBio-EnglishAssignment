import React, { Component } from 'react'
import AppBarMUI from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

interface IAppBar {
  dontHide?: boolean
}

export default class AppBar extends Component<IAppBar> {
  state = {
    isHide: this.props.dontHide ? true : false,
    scrollPos: window.scrollY,
  }

  hideBar = () => {
    window.scrollY > 100 ? this.setState({ isHide: true }) : this.setState({ isHide: false })
  }

  componentDidMount() {
    this.props.dontHide ? undefined : window.addEventListener('scroll', this.hideBar, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar)
  }

  render() {
    return (
      <AppBarMUI position='sticky' onScroll={this.hideBar}>
        <Toolbar style={{ justifyContent: 'space-around' }}>
          <a href='/' style={{ color: 'white', textDecoration: 'none' }}>
            {this.state.isHide && <Typography variant='h6'>Nathaniel's Mini Bio</Typography>}
          </a>
        </Toolbar>
      </AppBarMUI>
    )
  }
}
