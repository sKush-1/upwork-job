import { SET_LANGUAGE } from './types';
import ua from '../components/i18n/ua';
import en from '../components/i18n/eng';

const initialState = {
  language: 'ua',
  translations: ua
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      const translations = action.payload === 'ua' ? ua : en;
      return {
        ...state,
        language: action.payload,
        translations
      };
    default:
      return state;
  }
};

export default languageReducer;
