import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey'
import GitHubIcon from '@material-ui/icons/GitHub'

export default class Footer extends Component {
  render() {
    return (
      <div className='foot' style={{ backgroundColor: grey[900] }}>
        <div className='footLeft'>
          <div>Created by Nathaniel Young using</div>
          <img src='\assets\React1.png'></img>
          <a>React</a>
          <img src='\assets\React1.png'></img>
          <a>Typescript</a>
          {/* <img src='\assets\redux.png'></img>
          <a>Redux</a> */}
          <img src='\assets\SCSS.png'></img>
          <a>SCSS</a>
        </div>
        <div className='footRight'>
          <div>
            {/* version number every push add .1 to this */}
            <a>v1.0</a>
            <a href='https://github.com/RazorzMcLazorz' target='_blank'>
              <GitHubIcon className='i' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
