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
    make: null,
    model: null,
    year: null,
    fuel: null,
    value: null,
    mobile: null,
  },
  inc_benefits: { excess: true, pvt: true, phcf: true, aa_rescue: false },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function updateExcess() {
    let benefits = JSON.parse(localStorage.inc_benefits);

    benefits.excess = !state.inc_benefits.excess;

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  async function updatePvt() {
    let benefits = JSON.parse(localStorage.inc_benefits);

    benefits.pvt = !state.inc_benefits.pvt;

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  async function updateAA_Rescue() {
    let benefits = JSON.parse(localStorage.inc_benefits);

    benefits.aa_rescue = !state.inc_benefits.aa_rescue;

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  async function updatePHCF() {
    let benefits = JSON.parse(localStorage.inc_benefits);

    benefits.phcf = !state.inc_benefits.phcf;

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  async function resetBenefits() {
    let benefits = {
      excess: true,
      pvt: true,
      phcf: true,
      aa_rescue: false,
    };

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  async function addToComparisonList(code, name, company) {
    let comparison = JSON.parse(localStorage.compare);

    let element = { name: code };

    const exists = comparison.some((item) => item.code === element.name);

    if (!exists) {
      let cart;

      const item = {
        code,
        name,
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
    clearComparisonList();
  }

  async function getCarInfo() {
    if (localStorage.hasOwnProperty("car_info")) {
      updateCarInfo(JSON.parse(localStorage.car_info));
    } else {
      localStorage.setItem("car_info", JSON.stringify(state.car_info));
    }
  }

  async function getPlanBenefits() {
    let benefits;

    if (localStorage.hasOwnProperty("inc_benefits")) {
      benefits = JSON.parse(localStorage.inc_benefits);
    } else {
      benefits = state.inc_benefits;
      localStorage.setItem("inc_benefits", JSON.stringify(state.inc_benefits));
    }

    dispatch({
      type: "UPDATE_BENEFITS",
      payload: benefits,
    });
  }

  useEffect(() => {
    getCarInfo();
    getComparisonList();
    getPlanBenefits();
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
        updatePHCF,
        resetBenefits,

        car_info: state.car_info,
        to_compare: state.to_compare,
        inc_benefits: state.inc_benefits,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
