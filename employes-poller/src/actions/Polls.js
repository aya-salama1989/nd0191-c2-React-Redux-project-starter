import { showLoading, hideLoading } from "react-redux-loading-bar";
import { savePoll } from "../utils/api";

export const GET_POLLS = "GET_ALL_POLLS";
export const CREATE_POLL = "CREATE_POLL";

export function getPolls(polls) {
  return {
    type: GET_POLLS,
    polls,
  };
}

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    dispatch(showLoading);
    savePoll(poll)
      .then((poll) => {
        dispatch(createPoll(poll.id));
      })
      .then(() => dispatch(hideLoading));
  };
}

function createPoll(pollId) {
  return {
    type: CREATE_POLL,
    pollId,
  };
}
