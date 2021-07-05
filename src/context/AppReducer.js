const AppReducer = (state, action) => {
  // console.log("state ", state);
  // console.log("action", action.type);
  // console.log("payload", action.payload);

  switch (action.type) {
    case "UPDATE_AA_RESCUE":
      return {
        ...state,
        aa_rescue: action.payload,
      };
    case "UPDATE_PVT":
      return {
        ...state,
        pvt: action.payload,
      };
    case "UPDATE_EXCESS":
      return {
        ...state,
        excess: action.payload,
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
