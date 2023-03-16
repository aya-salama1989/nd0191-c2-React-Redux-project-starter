import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getIntialData } from "../utils/api";
import { getUsers } from "./Users";
import { getPolls } from "./Polls";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getIntialData().then(({users, polls}) => {
      dispatch(getUsers(users));
      dispatch(getPolls(polls));
      dispatch(hideLoading);
    });
  };
}
