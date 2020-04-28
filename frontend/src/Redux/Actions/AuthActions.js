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

    console.log("type" + type)

    switch(type) {
        case 'LOCAL':
            return dispatch => {
                dispatch(request())
                api.post('/auth/login', data)
                .then((response) => {
                    localStorage.setItem('token', response.token)
                    dispatch(success(response.user))
                    history.push('/home')
                })
                .catch(error => {
                    dispatch(failure(error))
                })
            }
        case 'GOOGLE':
            return dispatch => {
                dispatch(request())
                api.get('/auth/google')
                .then((response) => {
                    console.log(response)
                    localStorage.setItem('token', response.accessToken)
                    dispatch(success(response.token))

                    if (response.data.isNewUser) {
                        history.push('/register')
                    } else {
                        history.push('/home')
                    }

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