// Defining how 3 parts of our state will maintained and updated

// Used by ProductList component
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// The connecting piece of data for the previous 2 actions
// We want to be able to select a category from the state and display products from the list we create from Products
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";