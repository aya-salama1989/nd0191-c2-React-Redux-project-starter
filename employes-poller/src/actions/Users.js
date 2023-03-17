export const GET_USERS ="GET_ALL_USERS";
export const GET_USER_ANSWER ="GET_USER_ANSWER";


export function getUsers(users){
    return{
        type: GET_USERS,
        users
    }
}
export function setUserAnswer(userId, pollId, answer){
    return{
        type: GET_USER_ANSWER,
        userId, pollId, answer
    }
}