import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock", //state이름
  initialState: [0, 1, 2], //값
});

let cart = createSlice({
  name: "cart", //state이름
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ], //값
  reducers: {
    changeCount(state, action) {
      let 번호 = state.findIndex((value) => {
        return value.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

// addItem({ id: 1, name: "Red Knit", count: 1 });

export let { changeCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, //작명: 위state이름.reducer
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
