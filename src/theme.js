import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 875,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: '#2196F3',
    },
  },
});
