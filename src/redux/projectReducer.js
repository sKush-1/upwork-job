import { CHANGE_NEW_PROJECT, CHANGE_OLD_PROJECT } from "./types";

const initialState = {
  selectedList: 'new' 
};


export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_PROJECT:
      return {
        ...state,
        selectedList: 'new', 
      };
    case CHANGE_OLD_PROJECT:
      return {
        ...state,
        selectedList: 'old',
      };
    default:
      return state;
  }
};