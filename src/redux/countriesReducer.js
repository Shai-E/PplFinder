const reducer = (
  state = [
    { name: "Australia", iso2: "AU", display: true },
    { name: "Brazil", iso2: "BR", display: true },
    { name: "Canada", iso2: "CA", display: true },
    { name: "Switzerland", iso2: "CH", display: false },
    { name: "Germany", iso2: "DE", display: true },
    { name: "Denmark", iso2: "DK", display: false },
    { name: "Spain", iso2: "ES", display: false },
    { name: "Finland", iso2: "FI", display: false },
    { name: "France", iso2: "FR", display: false },
    { name: "United Kingdom", iso2: "GB", display: false },
    { name: "Ireland", iso2: "IE", display: false },
    { name: "Iran", iso2: "IR", display: false },
    { name: "The Netherlands", iso2: "NL", display: false },
    { name: "Norway", iso2: "NO", display: false },
    { name: "New Zealand", iso2: "NZ", display: false },
    { name: "Turkey", iso2: "TR", display: false },
    { name: "United States", iso2: "US", display: true },
  ],
  action
) => {
  switch (action.type) {
    case "UPDATE_SELECTED_COUNTRIES": {
      return state.map((country) => {
        if (country.name === action.payload) country.display = !country.display;
        return country;
      });
    }
    default:
      return state;
  }
};

export default reducer;
