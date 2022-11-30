const reducer = (state = {}, action) => {
  const { word, id } = action;
  switch (action.type) {
    case 'ADD_WORD':
      return Object.assign ({}, state, {
        [id]: {
          word: word,
          length: word.length,
          id: id
        }
      });
    case 'DELETE_WORD':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;