// createContext -> used to create a container to hold our global state data and functionality
// useContext -> allows us to use the state created from createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    // state -> the most up-to-date version of our global state object
    // dispatch -> is the method executed to update the state
    // dispatch specifically looks for an action object passed in as it's argument
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      cartOpen: false,
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
      return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };