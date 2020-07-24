import {userConstants} from './types';


export const usersActions = {
    userRegistration,
}

function userRegistration(data) {
    return dispatch => {
        dispatch(success(data))
    }

    function success(data) { return { type: userConstants.USER_REG_SUCCESS, data: data}}
}

