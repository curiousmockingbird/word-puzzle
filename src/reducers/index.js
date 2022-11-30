import wordListReducer from './word-list-reducer';
import formVisibleReducer from './form-visible-on-page-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
  formVisibleOnPage: formVisibleReducer,
  mainWordList: wordListReducer
});

export default rootReducer;