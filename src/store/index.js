//packages
import { configureStore } from "@reduxjs/toolkit";

//reducers
import userState from "./User/index";

const store = configureStore({
  reducer: {
    userState,
  },
});

export default store;
