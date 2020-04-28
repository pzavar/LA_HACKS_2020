import { userConstants } from '../Actions/types';

const initialState = {
    regLoading: false,
    getUserLoading: false,
    changeLoading: false,
    regError: null,
    getUserError: null,
    changeError: null,

    email: '',
    budget: '',
    diet: '',
    exclude: [],
    targetCalories: '',
}

export function user(state=initialState, action) {
    switch(action.type) {
        /* Registration */
        case userConstants.USER_REG_REQUEST:
            return {
                ...state,
                regLoading: true,
                regError: null,
            }
        case userConstants.USER_REG_SUCCESS:
            {
            const {
                email, 
                budget, 
                diet, 
                exclude, 
                targetCalories } = action.data;
            return {
                ...state,
                regLoading: false,
                regError: null,
                email: email,
                budget: budget,
                diet: diet,
                exclude: exclude,
                targetCalories: targetCalories,
            }
            }
        case userConstants.USER_REG_FAILURE:
            return {
                ...state,
                regLoading: false,
                regError: action.error,
            }

        /* Get User */
        case userConstants.USER_GET_REQUEST:
            return {
                ...state,
                getUserLoading: true,
                getUserError: false,
            }

        case userConstants.USER_GET_SUCCESS:
            return {
                ...state,
                getUserLoading: false,
                email: action.data.email,
                budget: action.data.budget,
                diet: action.data.diet,
                exclude: action.data.exclude,
                targetCalories: action.data.targetCalories,
            }
        
        case userConstants.USER_GET_FAILURE:
            return {
                getUserLoading: false,
                getUserError: action.error,
            }

        /* Change Settings */
        case userConstants.USER_CHANGE_SETTINGS_REQUEST:
            return {
                ...state,
                changeLoading: true,
                changeError: null
            }
        case userConstants.USER_CHANGE_SETTINGS_SUCCESS:
            {
            const {
                email, 
                budget, 
                diet, 
                exclude, 
                targetCalories } = action.data;
            return {
                ...state,
                changeLoading: false,
                changeError: null,
                email: email,
                budget: budget,
                diet: diet,
                exclude: exclude,
                targetCalories: targetCalories,
            }}
        case userConstants.USER_CHANGE_SETTINGS_FAILURE:
            return {
                ...state,
                changeLoading: false,
                changeError: action.error,
            }
        
        /* Default */
        default:
            return state;
    }
}