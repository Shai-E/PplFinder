export const updateFavorites = (data) => {
    return {
        type: "UPDATE_FAVORITES",
        payload: data
    }
}

export const updateSelectedCountries = (data) => {
    return {
        type: "UPDATE_SELECTED_COUNTRIES",
        payload: data
    }
}

export const setDarkMode = (data) => {
    return {
        type: "SET_IS_DARK",
        payload: data
    }
}

export const updateNationality = (data) => {
    return {
        type: "UPDATE_NATIONALITY",
        payload: data
    }
}

export const updatePageNumber = () => {
    return {
        type: "UPDATE_PAGE_NUMBER",
    }
}