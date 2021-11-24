import { getFromLocalStorage, saveToLocalStorage } from "../utils/storageHelper";
const reducer = (
  state = {
    favorites: getFromLocalStorage("favorites") || [],
    emails: getFromLocalStorage("favoriteList") || [],
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_FAVORITES":
      saveToLocalStorage("favorites", action.payload);
      const emails = action.payload.reduce((acc, i) => [...acc, i.email], []);
      saveToLocalStorage("favoriteList", emails);
      return (state = { favorites: action.payload, emails });
    default:
      return state;
  }
};

export default reducer;
