import {mealsConstants} from '../Actions/types';

import {dummyData} from './dummy'

const initialState = {
    mealsLoading: true,
    addFavLoading: false,
    removeFavLoading: false,
    swapMealLoading: false,
    getHistoryLoading: false,
    getFavLoading: false,
    getGroceryLoading: false,

    mealsError: null,
    addFavError: null,
    removeFavError: null,
    swapMealError: null,
    getHistoryError: null,
    getFavError: null,
    getGroceryError: null,



    weeklyMeals: dummyData.dummyMeals,

    history: [],
    favorites: dummyData.dummyFavoriteList,
    grocery: dummyData.dummyGrocery,
}


export function meals(state=initialState, action) {
    switch(action.type) {
        /* Get Week */
        case mealsConstants.WEEK_REQUEST:
            return {
                ...state,
                mealsLoading: true,
                mealsError: null
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
                mealsError: action.error,
            }


        /* Add Favorite Meal */
        case mealsConstants.ADD_FAVORITE_REQUEST:
            return {
                ...state,
                addFavLoading: true,
                addFavError: null
            }
        case mealsConstants.ADD_FAVORITE_SUCCESS:
            return {
                ...state,
                favorites: action.data,
                addFavLoading: false,
            }
        case mealsConstants.ADD_FAVORITE_FAILURE:
            return {
                ...state,
                addFavLoading: false,
                addFavError: action.error,
            }


        /* Remove Favorite Meal */
        case mealsConstants.REMOVE_FAVORITE_REQUEST:
            return {
                ...state,
                removeFavLoading: true,
                removeFavError: null
            }
        case mealsConstants.REMOVE_FAVORITE_SUCCESS:
            return {
                ...state,
                favorites: action.data,
                removeFavLoading: false,
            }
        case mealsConstants.REMOVE_FAVORITE_FAILURE:
            return {
                ...state,
                mealsLoading: false,
                removeFavError: action.error,
            }

        /* Swap Meal */
        case mealsConstants.SWAP_MEAL_REQUEST:
            return {
                ...state,
                swapMealLoading: true,
                swapMealError: null
            }
        case mealsConstants.SWAP_MEAL_SUCCESS:
            return {
                ...state,
                weeklyMeals: action.data,
                swapMealLoading: false,
            }
        case mealsConstants.SWAP_MEAL_FAILURE:
            return {
                ...state,
                swapMealLoading: false,
                swapMealError: action.error,
            }

        /* Get History */
        case mealsConstants.GET_HISTORY_REQUEST:
            return {
                ...state,
                getHistoryLoading: true,
                getHistoryError: null
            }
        case mealsConstants.GET_HISTORY_SUCCESS:
            return {
                ...state,
                history: action.data,
                getHistoryLoading: false,
            }
        case mealsConstants.GET_HISTORY_FAILURE:
            return {
                ...state,
                getHistoryLoading: false,
                getHistoryError: action.error,
            }

        /* Get Favorite Meals */
        case mealsConstants.GET_FAVORITES_REQUEST:
            return {
                ...state,
                getFavLoading: true,
                getFavError: null
            }
        case mealsConstants.GET_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: action.data,
                getFavLoading: false,
            }
        case mealsConstants.GET_FAVORITES_FAILURE:
            return {
                ...state,
                getFavLoading: false,
                getFavError: action.error,
            }

        /* Get Grocery List */
        case mealsConstants.GET_GROCERY_REQUEST:
            return {
                ...state,
                getGroceryLoading: true,
                getGroceryError: null
            }
        case mealsConstants.GET_GROCERY_SUCCESS:
            return {
                ...state,
                grocery: action.data,
                getGroceryError: false,
            }
        case mealsConstants.GET_GROCERY_FAILURE:
            return {
                ...state,
                getGroceryLoading: false,
                getGroceryError: action.error,
            }


        default:
            return state

    }

}

/*
    weeklyMeals: {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    },
*/