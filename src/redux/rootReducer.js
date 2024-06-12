import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer'; // Іменований експорт
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  language: languageReducer,
});

export default rootReducer;
