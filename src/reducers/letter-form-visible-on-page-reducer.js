const reducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_LETTER_FORM':
    return !state;
  default:
    return state;
  }
};

export default reducer;