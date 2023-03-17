import {GET_USERS, GET_USER_ANSWER} from "../actions/Users"

export default function users(state = {}, action){
    switch(action.type){
        case GET_USERS:
            return action.users;
        case GET_USER_ANSWER:
            console.log(action);
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.pollId]: action.answer
                    }
                }
            };
            default: return state;
    }
}