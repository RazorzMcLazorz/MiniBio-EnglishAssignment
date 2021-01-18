import React, { Component } from 'react'
import AppBarMUI from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import Slider from '@material-ui/core/Slider'
import VolumeDown from '@material-ui/icons/VolumeDown'
import VolumeUp from '@material-ui/icons/VolumeUp'

interface IAppBar {
  dontHide?: boolean
}

interface IState {
  isHide: boolean
  scrollPos: number
  audio: boolean
  audioVol: number
}

export default class AppBar extends Component<IAppBar, IState> {
  state: IState = {
    isHide: this.props.dontHide ? true : false,
    scrollPos: window.scrollY,
    audio: true,
    audioVol: 60,
  }

  audio = new Audio('/assets/purrple-cat-falling-star.mp3')

  hideBar = () => {
    window.scrollY > 100 ? this.setState({ isHide: true }) : this.setState({ isHide: false })
  }

  changeMusic(audio: boolean) {
    if (audio) {
      this.audio.pause()
      this.setState({ audio: !audio })
    } else {
      this.audio.play()
      this.setState({ audio: !audio })
    }
  }

  setMusicVolume(newVal: number) {
    this.audio.volume = newVal / 100
    this.setState({ audioVol: newVal })
  }

  componentDidMount() {
    this.props.dontHide ? undefined : window.addEventListener('scroll', this.hideBar, true)
    this.audio.autoplay = true
    this.audio.loop = true
    this.audio.load()
    this.setMusicVolume(this.state.audioVol)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar)
  }

  render() {
    return (
      <AppBarMUI position='sticky' onScroll={this.hideBar}>
        <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <a href='/' style={{ color: 'white', textDecoration: 'none' }}>
            {this.state.isHide && <Typography variant='h6'>Nathaniel's Mini Bio</Typography>}
          </a>
          <div style={{ display: 'flex', width: 150, alignItems: 'center' }}>
            <VolumeDown />
            <Slider
              value={this.state.audioVol}
              onChange={(_, newVal) => this.setMusicVolume(newVal as number)}
              style={{ color: 'white', margin: '0 5px' }}
            />
            <VolumeUp />
            <IconButton color='inherit' onClick={() => this.changeMusic(this.state.audio)}>
              {this.state.audio ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBarMUI>
    )
  }
}
