import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router";
import './darkMode.css'
import { useDispatch } from "react-redux";
import { setDarkMode } from "redux/actionTypes";
import { getFromLocalStorage, getFromSessionStorage, saveToLocalStorage, saveToSessionStorage } from "utils/storageHelper";

const NavBar = () => {
  const [value, setValue] = useState(getFromSessionStorage("currentRoute") || 0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const dispatch = useDispatch()

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const routes = ["home", "favorites"];
  const history = useHistory();

  useEffect(() => {
    saveToSessionStorage("currentRoute", value);
    history.replace(routes[value]);
  }, [value]);

  const onDarkModeToggle = ({target: {checked}})=>{
    setIsDarkMode(checked);
    saveToLocalStorage("isDarkMode", checked);
  }

  useEffect(()=>{
    const darkModeFromLS = getFromLocalStorage("isDarkMode") 
    darkModeFromLS !== null && setIsDarkMode(darkModeFromLS);
  },[])
  
  useEffect(()=>{
    dispatch(setDarkMode(isDarkMode));
  },[isDarkMode])

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0, display: 'flex', flexDirection:"row", justifyContent: 'space-between' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
        <div className="wrapper">
          <input type="checkbox" checked={isDarkMode} name="checkbox" className="switch" onChange={onDarkModeToggle}/>
        </div>
    </AppBar>
  );
};

export default NavBar;
