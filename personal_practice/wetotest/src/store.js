import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./store/modules/crewSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
