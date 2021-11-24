const reducer = (state = true, action) => {
    switch (action.type) {
    case "SET_IS_DARK":
        return (state = action.payload);
      default:
        return state;
    }
  };
  
  export default reducer;
  