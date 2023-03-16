import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getIntialData } from "../utils/api";
import { setAuthedUser } from "./AuthedUser";
import { getUsers } from "./Users";
import { getPolls } from "./Polls";

const zanobia = "zoshikanlu"

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getIntialData().then(({users, polls}) => {
      dispatch(setAuthedUser(zanobia))
      dispatch(getUsers(users));
      dispatch(getPolls(polls));
      dispatch(hideLoading);
    });
  };
}
