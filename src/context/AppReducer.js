const AppReducer = (state, action) => {
  // console.log("state ", state);
  // console.log("action", action.type);
  // console.log("payload", action.payload);

  switch (action.type) {
    case "UPDATE_BENEFITS":
      localStorage.inc_benefits = JSON.stringify(action.payload);
      return {
        ...state,
        inc_benefits: action.payload,
      };
    case "SET_COMPARISON_ITEMS":
      return {
        ...state,
        to_compare: action.payload,
      };

    case "SET_CAR_INFO":
      return {
        ...state,
        car_info: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
