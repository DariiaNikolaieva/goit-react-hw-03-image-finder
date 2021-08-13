import { configureStore } from "@reduxjs/toolkit";
import { gallery } from "./reducers";

export const store = configureStore({
  reducer: { gallery },
});
