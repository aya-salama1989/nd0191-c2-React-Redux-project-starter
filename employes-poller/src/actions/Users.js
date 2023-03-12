export const GET_USERS ="GET_ALL_USERS";


export function getUsers(users){
    return{
        type: GET_USERS,
        users
    }
}