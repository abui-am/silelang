import React, { createContext, useReducer } from "react";
import { getApi } from "../api/Api";
const initialState = {
  isLogged: false,
  adminData: {},
};
const adminAuthStore = createContext(initialState);
const { Provider } = adminAuthStore;

const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    const { payload } = action;

    switch (action.type) {
      case "handleLogin":
        return { ...state, isLogged: true, adminData: action.payload };
      case "handleLogout":
        return { ...state, isLogged: false, adminData: {} };

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { adminAuthStore, AdminProvider };
