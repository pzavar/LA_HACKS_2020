import { userConstants } from '../Actions/types';

const initialState = {
    regLoading: false,
    changeLoading: false,
    regError: null,
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