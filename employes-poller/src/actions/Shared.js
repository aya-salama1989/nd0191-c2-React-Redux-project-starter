import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getIntialData } from "../utils/api";
import { setAuthedUser } from "./AuthedUser";
import { getUsers } from "./Users";
import { getPolls } from "./Polls";


//TODO: remove used for testing purposes, use dynamic one
const SARAH_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getIntialData().then(({users, polls}) => {
      dispatch(setAuthedUser(SARAH_ID));
      dispatch(getUsers(users));
      dispatch(getPolls(polls));
      dispatch(hideLoading);
    });
  };
}
