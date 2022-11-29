const reducer = (state = {}, action) => {
  const { word, id } = action;
  switch (action.type) {
    case 'CREATE_WORD':
      return Object.assign ({}, state, {
        [id]: {
          word: word,
          id: id
        }
      })
default:
    return state;
  }
};

export default reducer;