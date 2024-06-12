// import { type } from "@testing-library/user-event/dist/type";
import {
  CHANGE_NEW_PROJECT,
  CHANGE_OLD_PROJECT,
  SET_LANGUAGE
} from "./types";

export const newProjects = () => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_NEW_PROJECT
    });
  };
};

export const oldProjects = () => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_OLD_PROJECT
    });
  };
};

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language
});
