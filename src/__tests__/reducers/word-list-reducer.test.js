import wordListReducer from "../../reducers/word-list-reducer";

describe('wordListReducer', () => {
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
    expect(wordListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add a word to guess', () => {
    const { word, id } = wordToGuess;
    action = {
      type: 'ADD_WORD',
      word: word,
      id: id
    };

    expect(wordListReducer({}, action)).toEqual({
      [id]: {
        word: word,
        length: word.length,
        id: id
      }
    });
  });  
  
  test('Should successfully delete the word once the game finishes', () => {
    action = {
      type: 'DELETE_WORD',
      id: 1
    };
    expect(wordListReducer(currentState, action)).toEqual({});
  });

  // test('Should return the number of characters the created word has', () => {
  //   action = {
  //     type: 'COUNT_LETTERS'
  //   };
  //   expect(wordListReducer(wordToGuess.word.length, action)).toEqual(6);
  // });
});