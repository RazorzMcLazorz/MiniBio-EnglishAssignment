import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import Button from '@material-ui/core/Button'
import SlideWords from './SlideWords'

interface IProps {
  onClick: () => void
}

export default class Welcome extends Component<IProps> {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          position: 'sticky',
          top: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: grey[900],
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          className='title'
          variant='h3'
          color='secondary'
          style={{ textAlign: 'center' }}>
          <SlideWords word='Welcome to Nathaniels Mini Bio Website' />
        </Typography>
        <Button onClick={this.props.onClick} style={{ color: '#fff' }}>
          Click Here
        </Button>
      </div>
    )
  }
}
