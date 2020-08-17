import {userConstants} from './types';
import {api} from '../../Utils/url';


export const usersActions = {
    userRegistration,
    signUpWaitlist,
}

function userRegistration(data) {
    return dispatch => {
        dispatch(success(data))
    }

    function success(data) { return { type: userConstants.USER_REG_SUCCESS, data: data}}
}

function signUpWaitlist(email) {
    return dispatch => {
        dispatch(request())

        api.post("email/signup", email)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch((error) => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: userConstants.USER_SIGNUPEMAIL_REQUEST}}
    function success(data) { return {type: userConstants.USER_SIGNUPEMAIL_SUCCESS, data}}
    function failure(error) { return {type: userConstants.USER_SIGNUPEMAIL_FAILURE, error}}
}

