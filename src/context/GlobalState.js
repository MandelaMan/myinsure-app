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
  to_compare: [],
  car_info: {
    make: undefined,
    model: undefined,
    year: undefined,
    fuel: undefined,
    value: 0,
    phone: undefined,
  },
  excess: false,
  pvt: false,
  aa_rescue: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function updateExcess() {
    dispatch({
      type: "UPDATE_EXCESS",
      payload: !state.excess,
    });
  }
  async function updatePvt() {
    dispatch({
      type: "UPDATE_PVT",
      payload: !state.pvt,
    });
  }
  async function updateAA_Rescue() {
    dispatch({
      type: "UPDATE_AA_RESCUE",
      payload: !state.aa_rescue,
    });
  }

  async function addToComparisonList(code, name, price, company) {
    let comparison = JSON.parse(localStorage.compare);

    let element = { name: code };

    const exists = comparison.some((item) => item.code === element.name);

    if (!exists) {
      let cart;

      const item = {
        code,
        name,
        price,
        company,
      };

      cart = JSON.parse(localStorage.compare);

      cart = [...cart, item];

      localStorage.compare = JSON.stringify(cart);

      getComparisonList();
    } else {
      console.log("item already exists in the cart");
    }
  }

  async function getComparisonList() {
    const toCompare = localStorage.compare;

    if (toCompare) {
      dispatch({
        type: "SET_COMPARISON_ITEMS",
        payload: JSON.parse(toCompare),
      });
    } else {
      localStorage.compare = JSON.stringify([]);
    }
  }
  async function removeFromComparisonList(code) {
    let cart = JSON.parse(localStorage.compare);

    cart = cart.filter((item) => item.code !== code);

    if (cart.length < 1) {
      clearComparisonList();
    } else {
      localStorage.compare = JSON.stringify(cart);

      getComparisonList();
    }
  }

  async function clearComparisonList() {
    localStorage.compare = JSON.stringify([]);

    getComparisonList();
  }

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
    getComparisonList();
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        updateCarInfo,
        getCarInfo,
        addToComparisonList,
        getComparisonList,
        removeFromComparisonList,
        clearComparisonList,
        updateExcess,
        updatePvt,
        updateAA_Rescue,

        car_info: state.car_info,
        to_compare: state.to_compare,
        excess: state.excess,
        pvt: state.pvt,
        aa_rescue: state.aa_rescue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
