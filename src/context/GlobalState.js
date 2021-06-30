import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// import {
//   encryptData,
//   decryptData,
//   addCookie,
//   getCookie,
//   deleteCookie,
// } from "../helpers/Functions";

const initialState = {
  car_info: {
    make: undefined,
    model: undefined,
    year: undefined,
    fuel: undefined,
    value: 0,
    phone: undefined,
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function updateCarInfo(info) {
    dispatch({
      type: "SET_CAR_INFO",
      payload: info,
    });

    localStorage.car_info = JSON.stringify(info);
  }

  async function getCarInfo() {
    const info = localStorage.car_info;

    if (info) {
      updateCarInfo(JSON.parse(info));
    }
  }

  useEffect(() => {
    getCarInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        updateCarInfo,
        getCarInfo,

        car_info: state.car_info,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
