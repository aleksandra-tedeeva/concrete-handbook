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
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(224, 224, 224, 1)',
          padding: '8px',
          '&:first-child': {
            borderRedius: '16px 0 0 16px'
          },
          '&:last-child': {
            borderRedius: '0 16px 16px 0'
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }
      }
    }
  }
});
