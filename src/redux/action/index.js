export const addCart = (gallery) => {
    return {
        type: "ADDITEM",
        payload: gallery
    }
}

export const delCart = (gallery) => {
    return {
        type: "DELITEM",
        payload: gallery
    }
}