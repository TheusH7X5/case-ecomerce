import { createMuiTheme } from '@material-ui/core/styles'
import {primaryColor } from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main:  "#FFFFFF",
            contrastText: "white"
        }
    }
}) 

export default theme