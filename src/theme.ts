import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    formula: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariant {
    formula_now: true;
  }
}

const COLOR_PRIMARY = '#8293cb';
const COLOR_SECONDARY = '#a5c1e6';
const COLOR_GREY = '#545454';

const FONT_MAIN = 'Nunito';
const FONT_FALLBACK = 'Roboto, Myriad Pro, Arial, sans-serif';

const FONT_FAMILY = `${FONT_MAIN}, ${FONT_FALLBACK}`;

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLOR_PRIMARY
    },
    secondary: {
      main: COLOR_SECONDARY
    },
    text: {
      primary: COLOR_GREY
    }
  },
  typography: {
    fontFamily: FONT_FAMILY,
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'none',
          color: COLOR_GREY,
          border: 'none',
          boxShadow: 'none'
        }
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'formula' },
          style: {
            // кастом стиль для формул сюда, например:
            color: red[400],
            minWidth: '48px',
            fontSize: '24px',
            fontFamily: 'Times New Roman',
            fontStyle: 'italic'
          }
        }
      ]
    },

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
