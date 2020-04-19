import React, { createContext, useReducer } from "react";
import { getApi } from "../api/Api";
const initialState = {
  openLogin: false,
  openRegister: false,
  isLogged: false,
  userData: {},
};
const authStore = createContext(initialState);
const { Provider } = authStore;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    const { payload } = action;

    switch (action.type) {
      case "openLogin":
        newState = { ...state, openLogin: true };
        return newState;
      case "closeLogin":
        newState = { ...state, openLogin: false };
        return newState;
      case "openRegister":
        newState = { ...state, openRegister: true };
        return newState;
      case "closeRegister":
        newState = { ...state, openRegister: false };
        return newState;
      case "handleLogin":
        return { ...state, isLogged: true, userData: action.payload };
      case "handleLogout":
        return { ...state, isLogged: false, userData: {} };

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { authStore, StateProvider };
