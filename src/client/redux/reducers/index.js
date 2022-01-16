import { combineReducers } from "redux";
import userReducer from "./usersReducer";
const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
