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

        const sendData = {email: email};

        console.log(sendData)
        
        api.post("/email/signup", sendData)
        .then((response) => {
            if (response.data.success)
                dispatch(success(response.data))
            else    
                dispatch(failure(response.data.message))
        })
        .catch((error) => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: userConstants.USER_SIGNUPEMAIL_REQUEST}}
    function success(data) { return {type: userConstants.USER_SIGNUPEMAIL_SUCCESS, data}}
    function failure(error) { return {type: userConstants.USER_SIGNUPEMAIL_FAILURE, error}}
}

