import { authConstants } from '../Actions/types';

const initialState = {
    isLoginLoading: false,
    loginError: null,
    logoutError: null,
}

export function auth(state=initialState, action) {
    switch(action.type) {
        /* Login */
        case authConstants.LOGIN_REUEST:
            return {
                ...state,
                isLoginLoading: true,
                loginError: null,
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginLoading: false,
            }
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoginLoading: false,
                loginError: action.error,
            }

        /* Logout */
        case authConstants.LOGOUT_REUEST:
            return {
                ...state,
                logoutError: null,
            }
        case authConstants.LOGOUT_SUCCESS:
            return {
                ... state,
            }
        case authConstants.LOGOUT_FAILURE:
            return {
                ... state,
                logoutError: action.error,
            }

        default: 
            return state;
    }

}