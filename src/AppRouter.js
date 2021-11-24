import React from "react";
import { ThemeProvider } from "theme";
import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import pageNumberReducer from "redux/pageNumberReducer";
import nationalityReducer from "redux/nationalityReducer";
import favoritesReducer from "redux/favoritesReducer";
import countriesReducer from "redux/countriesReducer";
import darkModeReducer from'redux/darkModeReducer';
import Routing from "Routing/Routing";

const store = createStore(
  combineReducers({
    pageNumber: pageNumberReducer,
    nationality: nationalityReducer,
    favorites: favoritesReducer,
    countries: countriesReducer,
    isDarkMode: darkModeReducer
  })
);

const AppRouter = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default AppRouter;
