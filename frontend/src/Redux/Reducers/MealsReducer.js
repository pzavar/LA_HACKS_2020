import {mealsConstants} from '../Actions/types';

import {dummyData} from './dummy'

const initialState = {
    // Spoonacular Search Request
    searchLoading: false,
    searchData: dummyData.dummyMealOptions,
    searchError: false,
    searchErrorMessage: null,

    //User Selected Meals
    mealsData: dummyData.dummyDailyMeals,

    // User Selected Meals' Grocery List
    groceryList: dummyData.dummyGrocery,

    // User Selected Meals' Macros
    macros: dummyData.dummyDailyMacros,
}


export function meals(state=initialState, action) {
    switch(action.type) {
        /* Search Meals */
        case mealsConstants.SEARCH_REQUEST:
            return {
                ...state,
                searchLoading: true,
                searchError: null,
            }
        case mealsConstants.SEARCH_SUCCESS:
            return {
                ...state,
                searchLoading: false,
                searchData: action.data,
            }
        case mealsConstants.SEARCH_FAILURE:
            return {
                ...state,
                searchLoading: false,
                searchError: true,
                searchErrorMessage: action.error,
            }

        /* Set Meals */
        case mealsConstants.SET_MEALS_SUCCESS:
            return {
                ...state,
                searchData: {},
                mealsData: action.data,
            }

        /* Set Grocery List */
        case mealsConstants.SET_GROCERY_LIST_SUCCESS:
            return {
                ...state,
                searchData: {},
                groceryList: action.data,
            }

        /* Set Macros */
        case mealsConstants.SET_MACROS_SUCESS:
            return {
                ...state,
                searchData: {},
                macros: action.data,
            }

        default:
            return state;

    }
}
