import { combineReducers } from "redux";
import userReducer from "../components/userReducer";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
