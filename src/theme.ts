import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3c53a4'
    },
    secondary: {
      main: '#42428e'
    }
    // background: {
    //   default: '#ddd'#ddd#861F41#2B3F63
    // }
  },
  typography: {
    fontFamily: 'Nunito',
    h1: {
      padding: 0,
      margin: 0
    },
    h2: {
      padding: 0,
      margin: 0
    },
    h3: {
      padding: 0,
      margin: 0
    },
    h4: {
      padding: 0,
      margin: 0
    },
    h5: {
      padding: 0,
      margin: 0
    },
    h6: {
      padding: 0,
      margin: 0
    }
  }
});
