import { combineReducers } from "redux";
import main from "./modules/main";
import crewSlice from "./modules/crewSlice";
import mypage from "./modules/mypage";
import recommendation from "./modules/recommendation";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools Extension
);

export default store;
