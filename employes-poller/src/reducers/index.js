import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import polls from "./polls";
import users from "./users";
import authedUser from "./autheduser";

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBarReducer,
});
