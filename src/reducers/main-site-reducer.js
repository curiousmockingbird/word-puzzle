const reducer = (state = {}, action) => {
  const { word, id } = action;
  switch (action.type) {
    case 'CREATE_WORD':
      return Object.assign ({}, state, {
        [id]: {
          word: word,
          id: id
        }
      });
    case 'DELETE_WORD':
      //Something       
      const newState = {...state};
      delete newState[id];
      return newState;
    case 'COUNT_LETTERS':
      const letterState = {...state};
      return letterState.word;
    default:
      return state;
  }
};

export default reducer;