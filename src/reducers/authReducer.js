
import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAIL, LOGOUT } from "../actions/types";


const initialState = {
    isLoggingIn: false,
    user: null
}

export default (state , action) =>{
    switch(action.type){
        case LOGIN_START:
            return {...state, isLoggingIn: true, user: null}
        case LOGIN_SUCCESS:
            return {...state, isLoggingIn: false, user: action.payload}
        case LOGIN_FAIL:
            return {...state, isLoggingIn: false, user: null}
        case LOGOUT:
            return {...state, user: null}
        default:
            return state || initialState;
    }
}