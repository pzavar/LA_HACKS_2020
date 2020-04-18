import {mealsConstants} from '../Actions/types';

const initialState = {
    mealsLoading: true,
    weeklyMeals: {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    },
    error: null,
}


export function meals(state=initialState, action) {
    switch(action.type) {
        case mealsConstants.WEEK_REQUEST:
            return {
                ...state,
                mealsLoading: true,
                error: null
            }
        case mealsConstants.WEEK_SUCCESS:
            return {
                ...state,
                weeklyMeals: action.data,
                mealsLoading: false,
            }
        case mealsConstants.WEEK_FAILURE:
            return {
                ...state,
                mealsLoading: false,
                error: action.error,
            }

        default:
            return state

    }

}