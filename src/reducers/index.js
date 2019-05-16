import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import coinReducer from "./coinReducer";

export default combineReducers({
  page: pageReducer,
  coinList: coinReducer
});
