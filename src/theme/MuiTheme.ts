import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import cyan from '@material-ui/core/colors/cyan'

/**
 * Theme for the new Material UI Provider
 * @see https://material-ui.com/customization/themes/
 */
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: cyan[500]
    },
    background: {
      default: grey[500]
    }
  },
  typography: {
    fontFamily: 'Segoe UI Emoji'
  }
})
