import { createTheme } from '@mui/material/styles';
import { 
    primaryColor, 
    secondColor, 
    darkerSecondColor, 
    thirdColor, 
    darkerNeutralColor
} from './colors';

const theme = createTheme({
  palette: {
    primary: {
      light: thirdColor,
      main: primaryColor,
      dark: secondColor,
      contrastText: '#E9E561', 
    },
    secondary: {
      light: secondColor,
      main: darkerNeutralColor,
      dark: darkerSecondColor,
      contrastText: '#E9E561',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '10px',
        },
      },
    },
  },
});

export default theme;