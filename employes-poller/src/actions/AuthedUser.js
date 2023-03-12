export const SET_AUTHED_USER = "GET_AUTHED_USER";


export function setAuthedUser(id){
    return{
        type: SET_AUTHED_USER,
        id
    }
}


export function getAuthedUser(){
    //TODO: set authed user from UI component
}
