import {userConstants} from './types';
import {history} from '../../Utils/history';
import {api, auth_config} from '../../Utils/url';

export const usersActions = {
    userRegistration,
    userChangeSettings,
    getUser,
}

function userRegistration(data) {
    return dispatch => {
        dispatch(request())
        api.post('/user/reg', data)
        .then((response) => {
            localStorage.setItem('token', response.token)
            dispatch(success(response.data))
            history.push('/home')
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: userConstants.USER_REG_REQUEST}}
    function success(data) { return { type: userConstants.USER_REG_SUCCESS, data: data}}
    function failure(error) { return { type: userConstants.USER_REG_FAILURE, error: error}}
}

function getUser() {
    return dispatch => {
        dispatch(request)
        api.get('/user/get', auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: userConstants.USER_GET_REQUEST}}
    function success(data) { return { type: userConstants.USER_GET_SUCCESS, data: data}}
    function failure(error) { return { type: userConstants.USER_GET_FAILURE, error: error}}
}

function userChangeSettings(data) {
    return dispatch => {
        dispatch(request())
        api.post('/user/change', data, auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: userConstants.USER_CHANGE_SETTINGS_REQUEST}}
    function success(data) { return { type: userConstants.USER_CHANGE_SETTINGS_SUCCESS, data: data}}
    function failure(error) { return { type: userConstants.USER_CHANGE_SETTINGS_FAILURE, error: error}}

}
