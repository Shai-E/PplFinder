import React from "react";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { updateSelectedCountries } from "redux/actionTypes";

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left"
  },
  getContentAnchorEl: null,
};

const MultipleSelectCheckmarks = () => {
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    dispatch( updateSelectedCountries(value[0]));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300}}>
        <InputLabel id="multiple-checkbox-label">
          &nbsp; Add Your Favorite Countries
        </InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={[]}
          onChange={handleChange}
          input={<OutlinedInput/>}
          MenuProps={MenuProps}
          >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.name}>
              <Checkbox checked={country.display} />
              <ListItemText primary={country.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>  
  );
};

export default MultipleSelectCheckmarks;
