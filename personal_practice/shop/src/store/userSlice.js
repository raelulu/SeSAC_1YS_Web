import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //state이름
  initialState: { name: "kim", age: 20 }, //값
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    agePlus(state, action) {
      state.age += action.payload;
    },
  },
});
export let { changeName, agePlus } = user.actions;

export default user;
