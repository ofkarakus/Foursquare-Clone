const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_POSITION':
      return {...state, currentPosition: action.payload.currentPosition};
    default:
      return {...state};
  }
};

export default reducer;
