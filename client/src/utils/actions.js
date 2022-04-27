// Defining how 3 parts of our state will maintained and updated

// Used by ProductList component
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// The connecting piece of data for the previous 2 actions
// We want to be able to select a category from the state and display products from the list we create from Products
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const TOGGLE_CART = "TOGGLE_CART";