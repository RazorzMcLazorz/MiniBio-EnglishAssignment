import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiTheme } from './theme/MuiTheme'

import App from './components/App'

import './style/main.scss'

function main() {
  ReactDOM.render(
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>,
    document.querySelector('.app-wrapper')
  )
}

document.addEventListener('DOMContentLoaded', main)
