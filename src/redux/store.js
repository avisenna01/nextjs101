import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screen/reducer";

/** store : objek yang menyimpan seluruh state global dan menyediakan
 * method dispatch action untuk mengakses dan mentrigger perubahan state */
export const store = configureStore({
  // panggil reducer-reducer yang akan dipakai
  reducer: {
    screen: screenReducer,
  },
});

export default store;
