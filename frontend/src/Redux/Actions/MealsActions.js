import {mealsConstants} from './types';
import {history} from '../../Utils/history';
import {api, auth_config} from '../../Utils/url';


export const mealsActions ={
    getWeeklyMeals,
    getDailyMeals, // Need verification
    addFavMeal,
    removeFavMeal,
    swapMeal,
    getHistoryMeals,
    getFavMeals,
    getGrocery,
}

function getWeeklyMeals() {
    return dispatch => {
        dispatch(request())
        api.get("/meals/week", "", auth_config)
        .then((response) =>{
            console.log(response)

            // Variables
            var weekMeals = {
                sunday: [],
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
            };
            var i, j, chunk = 3;

            // Parse data from backend to meals day of the week
            for (i=0, j=response.data.length; i < j; i+=chunk) {
                switch(i) {
                    // Sunday
                    case 0:
                        weekMeals.sunday = response.data.slice(i, i+chunk);
                        break;

                    // Monday
                    case 3:
                        weekMeals.monday = response.data.slice(i, i+chunk);
                        break;

                    // Tuesday
                    case 6:
                        weekMeals.tuesday = response.data.slice(i, i+chunk);
                        break;

                    // Wednesday
                    case 9:
                        weekMeals.wednesday = response.data.slice(i, i+chunk);
                        break;

                    // Thursday
                    case 12:
                        weekMeals.thursday = response.data.slice(i, i+chunk);
                        break;

                    // Friday
                    case 15:
                        weekMeals.friday = response.data.slice(i, i+chunk);
                        break;

                    // Saturday
                    case 18:
                        weekMeals.saturday = response.data.slice(i, i+chunk);
                        break;

                    default:
                        break;
                }
            }
            dispatch(success(weekMeals))
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: mealsConstants.WEEK_REQUEST}}
    function success(data) { return {type: mealsConstants.WEEK_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.WEEK_FAILURE, error}}
}


function getDailyMeals(day, weekMeals) {
    return dispatch => {
        dispatch(request())

        
        dispatch(success)
    }

    function request() { return { type: mealsConstants.WEEK_REQUEST}}
    function success(data) { return {type: mealsConstants.WEEK_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.WEEK_FAILURE, error}}

}


function addFavMeal(mealId) {
    const data = {
        mealId: mealId
    }

    return dispatch => {
        dispatch(request())
        api.put('/meals/add_fav', data, auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }

    function request() { return { type: mealsConstants.ADD_FAVORITE_REQUEST}}
    function success(data) { return {type: mealsConstants.ADD_FAVORITE_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.ADD_FAVORITE_FAILURE, error}}

}

function removeFavMeal(mealId) {
    const data = {
        mealId: mealId
    }

    return dispatch => {
        dispatch(request())
        api.put('/meals/remove_fav', data, auth_config)
        .then(() => {
            dispatch(success(data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }


    function request() { return { type: mealsConstants.REMOVE_FAVORITE_REQUEST}}
    function success(data) { return {type: mealsConstants.REMOVE_FAVORITE_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.REMOVE_FAVORITE_FAILURE, error}}

}

function swapMeal(newMealId, oldMealId) {
    const data = {
        newMealId: newMealId,
        oldMealId: oldMealId,
    }

    return dispatch => {
        dispatch(request())
        api.put('/meals/swap', data, auth_config)
        .then(() => {
            dispatch(success(data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }

    function request() { return { type: mealsConstants.SWAP_MEAL_REQUEST}}
    function success(data) { return {type: mealsConstants.SWAP_MEAL_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.SWAP_MEAL_FAILURE, error}}

}

function getHistoryMeals() {
    return dispatch => {
        dispatch(request())
        api.get('/meals/history', '', auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }

    function request() { return { type: mealsConstants.GET_HISTORY_REQUEST}}
    function success(data) { return {type: mealsConstants.GET_HISTORY_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.GET_HISTORY_FAILURE, error}}

}

function getFavMeals() {
    return dispatch => {
        dispatch(request())
        api.get('/meals/favorite', '', auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }

    function request() { return { type: mealsConstants.GET_FAVORITES_REQUEST}}
    function success(data) { return {type: mealsConstants.GET_FAVORITES_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.GET_FAVORITES_FAILURE, error}}

}

function getGrocery() {
    return dispatch => {
        dispatch(request())
        api.get('/meals/grocery', '', auth_config)
        .then((response) => {
            dispatch(success(response.data))
        })
        .catch(error => 
            dispatch(failure(error)))
    }


    function request() { return { type: mealsConstants.GET_GROCERY_REQUEST}}
    function success(data) { return {type: mealsConstants.GET_GROCERY_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.GET_GROCERY_FAILURE, error}}

}