const filterReducer = (state = "ALL", action) => {
  console.log("test 3: ", action);
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};
export const filterChange = (filter) => {
  console.log("this is new test 2 : ", filter);
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};
export default filterReducer;
