import { CREATE_POLL, GET_POLLS } from "../actions/Polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };

    case CREATE_POLL:
      console.log(" ...state[action.userId]", action.userId);
      return {
        ...state,
        [action.poll.id]: {
          ...action.poll,
        }
      };
    default:
      return state;
  }
}
