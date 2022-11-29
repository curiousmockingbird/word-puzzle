import mainSiteReducer from "../../reducers/main-site-reducer";

describe('mainSiteReducer', () => {
  let action;
  const wordToGuess = {
    word: 'random',
    id: 1
  }  
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(mainSiteReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully create word to guess', () => {
    const { word, id } = wordToGuess;
    action = {
      type: 'CREATE_WORD',
      word: word,
      id: id
    };

    expect(mainSiteReducer({}, action)).toEqual({
      [id]: {
        word: word,
        id: id
      }
    })
  })
})