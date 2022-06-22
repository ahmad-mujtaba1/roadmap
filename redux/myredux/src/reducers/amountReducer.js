const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload.amount;
  } else if (action.type === "withdraw") {
    return state - action.payload.amount;
  } else {
    return state;
  }
};
export default reducer;
