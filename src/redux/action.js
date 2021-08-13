import { createAction } from "@reduxjs/toolkit";

export const getImagesRequest = createAction("getImages/request");
export const getImagesSuccess = createAction("getImages/success");
export const getImagesError = createAction("getImages/error");
