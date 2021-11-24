const reducer = (state = 1, action) => {
    switch (action.type) {
        case "UPDATE_PAGE_NUMBER":
            return (state = state + 1 );   
        default:
            return state;
    }
};

export default reducer;