import { createTheme } from "@mui/material";
import customTheme from '../styles/theme'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: customTheme?.background?.black },
    text: {
      primary: customTheme?.text?.white,
    },
    background: {
      default: customTheme?.background?.black,
      paper: customTheme?.background?.black,
    },
  },
});