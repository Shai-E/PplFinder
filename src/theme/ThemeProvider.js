import React from "react";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { isDarkMode } = useSelector(state=>state) 
  const overrides = {
    MuiTab: {
      root: {
        backgroundColor: isDarkMode ? "#303030" : "#ffffff",
      },
    },
      MuiCssBaseline: {
        '@global': {
          '*': {
            'scrollbar-width': 'thin',
          },
          '*::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': `inset 0 0 6px white`
          },
          '*::-webkit-scrollbar-thumb': !isDarkMode && {
            backgroundColor: '#f06292',
            outline: '1px solid #f06292'
          }
        }
      }
  };
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides,
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            main: isDarkMode ? "#84ffff" : "#f06292",
          },
          error: {
            main: "#f06292",
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
