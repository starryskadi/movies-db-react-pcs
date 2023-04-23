const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload.search };
    case "LOGIN":
      return {
        ...state,
        name: action.payload.user.username,
      };
    case "RANDOMNUMBER":
      return {
        ...state,
        name: action.payload.number,
      };
    default:
      return state;
  }
};

export default reducer;
