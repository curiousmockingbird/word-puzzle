import wordListReducer from './word-list-reducer';
import wordFormVisibleReducer from './word-form-visible-on-page-reducer';
import letterFormVisibleReducer from './letter-form-visible-on-page-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
  wordFormVisibleOnPage: wordFormVisibleReducer,
  letterFormVisibleOnPage: letterFormVisibleReducer,
  mainWordList: wordListReducer
});

export default rootReducer;