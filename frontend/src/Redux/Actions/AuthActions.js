import {authConstants} from './types';
import {history} from '../../Utils/history';
import {api, auth_config} from '../../Utils/url';



export const authActions = {
    login,
    logout,
}

function login(type, email, password) {
    const data = {
        email: email,
        password: password
    }

    switch(type) {
        case 'LOCAL':
            return dispatch => {
                dispatch(request())
                api.post('/auth/login', data)
                .then((response) => {
                    localStorage.setItem('token', response.token)
                    dispatch(success(response.token))
                    history.push('/home')
                })
                .catch(error => {
                    dispatch(failure(error))
                })
            }
        case 'GOOGLE':
            return dispatch => {
                dispatch(request())
                api.post('/auth/google')
                .then((response) => {
                    localStorage.setItem('token', response.token)
                    dispatch(success(response.token))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
            }
    }

    function request() { return { type: authConstants.LOGIN_REUEST}}
    function success(data) { return { type: authConstants.LOGIN_SUCCESS, data: data }}
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error: error }}
}


function logout() {
    return dispatch => {
        dispatch(request())
        api.post('/auth/logout', "", auth_config)
        .then((response) => {
            localStorage.removeItem('token')
            dispatch(success())
            history.push('/login')
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }
    function request() { return { type: authConstants.LOGOUT_REUEST}}
    function success() { return { type: authConstants.LOGOUT_SUCCESS }}
    function failure(error) { return { type: authConstants.LOGOUT_FAILURE, error: error }}
}