import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class Body extends Component {
  render() {
    return (
      <Typography component='p' className='paragraph'>
        {this.props.children}
      </Typography>
    )
  }
}
