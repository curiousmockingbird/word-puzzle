import mainSiteReducer from "../../reducers/main-site-reducer";

describe('mainSiteReducer', () => {
  let action;

  const currentState = {
    1: {
      word: 'random',
      id: 1
    }
  };

  const wordToGuess = {
    word: 'random',
    id: 1
  };

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
    });
  });  
  
  test('Should successfully delete the word once the game finishes', () => {
    action = {
      type: 'DELETE_WORD',
      id: 1
    };
    expect(mainSiteReducer(currentState, action)).toEqual({});
  });

  test('Should return the number of characters the created word has', () => {
    action = {
      type: 'COUNT_LETTERS'
    };
    expect(mainSiteReducer(wordToGuess.word, action)).toEqual(6);
  })
});