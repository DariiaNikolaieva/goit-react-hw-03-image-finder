import { createReducer } from "@reduxjs/toolkit";
import { getImagesRequest, getImagesSuccess, getImagesError } from "./action";

const initialState = [];
const actions = {
  [getImagesRequest]: (state, action) => {
    return initialState;
  },
  [getImagesSuccess]: (state, action) => {
    return [...state, ...action.payload];
  },
  [getImagesError]: () => {},
};

export const gallery = createReducer(initialState, actions);
