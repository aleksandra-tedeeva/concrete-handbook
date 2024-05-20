import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    formula: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    white: true;
    blue: true;
  }
}

const COLOR_PRIMARY = '#8691C8';
const COLOR_SECONDARY = '#C1CDE4';
const COLOR_TERTIARY = '#ADC0E4';
const COLOR_LIGHT_BLUE = '#DEE5F2';

const COLOR_DARK_GREY = '#373737';
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
      margin: 0,
      color: COLOR_DARK_GREY
    },
    h6: {
      padding: 0,
      margin: 0,
      color: COLOR_DARK_GREY
    }
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: 'white' },
          style: {
            background: 'white',
            borderRadius: '10px',
            filter: `drop-shadow(0 1px 1px ${COLOR_DARK_GREY})`,
            overflow: 'hidden',
            transition: '0.6s ease-in',
            position: 'relative',
            zIndex: '0',
            '.MuiTypography-root,.MuiSvgIcon-root': {
              color: COLOR_DARK_GREY,
              ':hover': {
                color: COLOR_DARK_GREY
              }
            },
            '::before': {
              content: '" "',
              position: 'absolute',
              zIndex: '-1',
              top: '-15px',
              right: '-15px',
              background: COLOR_LIGHT_BLUE,
              height: '220px',
              width: '25px',
              borderRadius: '32px',
              transform: 'scale(1)',
              transformOrigin: '50% 50%',
              transition: 'transform 0.25s ease-out'
            },
            ':hover::before': {
              transitionDelay: '0.2s',
              transform: 'scale(40)'
            }
          }
        },
        {
          props: { variant: 'blue' },
          style: {
            background: COLOR_SECONDARY,
            borderRadius: '10px',
            filter: `drop-shadow(0 1px 1px ${COLOR_DARK_GREY})`,
            overflow: 'hidden',
            transition: '0.6s ease-in',
            position: 'relative',
            zIndex: '0',
            '.MuiTypography-root,.MuiSvgIcon-root': {
              color: COLOR_DARK_GREY,
              ':hover': {
                color: COLOR_DARK_GREY
              }
            },
            '::before': {
              content: '" "',
              position: 'absolute',
              zIndex: '-1',
              top: '-15px',
              right: '-15px',
              background: COLOR_TERTIARY,
              height: '220px',
              width: '25px',
              borderRadius: '32px',
              transform: 'scale(1)',
              transformOrigin: '50% 50%',
              transition: 'transform 0.25s ease-out'
            },
            ':hover::before': {
              transitionDelay: '0.2s',
              transform: 'scale(40)'
            }
          }
        }
      ]
    },
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
