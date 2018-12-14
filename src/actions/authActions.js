import {LOGIN_SUCCESS} from './types'

export const loginAction = (user)=> {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}