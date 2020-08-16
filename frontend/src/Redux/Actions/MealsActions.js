import {mealsConstants} from './types';
import {history} from '../../Utils/history';
import {api} from '../../Utils/url';


export const mealsActions = {
    searchMeals,
    setMeals,
    setGroceryList,
    setMacros,
}


function searchMeals(searchData) {
    return dispatch => {
        dispatch(request())

        api.get("/meals/complex", searchData) 
        .then((response) => {
            dispatch(success(response.data));
            history.push('/meals');
        })
        .catch(error => {
            console.log(error)
            dispatch(failure(error.message))
        })
    }

    function request() { return { type: mealsConstants.SEARCH_REQUEST}}
    function success(data) { return {type: mealsConstants.SEARCH_SUCCESS, data}}
    function failure(error) { return {type: mealsConstants.SEARCH_FAILURE, error}}
}

function setMeals(mealsData) {
    return dispatch => {

        dispatch(success(mealsData))

    }

    function success(data) { return {type: mealsConstants.SET_MEALS_SUCCESS, data}}
}

// Add functionality to combine like ingredients
function setGroceryList(ingredientsData) {
    return dispatch => {
        var groceryList = [];

        for (let i=0; i < ingredientsData.length; i++) {
            for(let j=0; j < ingredientsData[i].length; j++) {
                groceryList.push(ingredientsData[i][j]);
            }
        }

        dispatch(success(groceryList))

    }

    function success(data) { return {type: mealsConstants.SET_GROCERY_LIST_SUCCESS, data}}
}

// Add functionality to combine Macros 
function setMacros(data) {
    return dispatch => {
        let macros = data;
        let calories = 0;
        let fat = 0;
        let cholestral = 0;
        let sodium = 0;
        let sugar = 0;
        let protein = 0;
        let carbs = 0;

        for(let i=0; i < macros.length; i++) {
            

            calories += parseFloat(macros[i][0].replace(/[^\d.-]/g, ''));
            fat += parseFloat(macros[i][1].replace(/[^\d.-]/g, ''));
            cholestral += parseFloat(macros[i][2].replace(/[^\d.-]/g, ''));
            sodium += parseFloat(macros[i][3].replace(/[^\d.-]/g, ''));
            sugar += parseFloat(macros[i][4].replace(/[^\d.-]/g, ''));
            protein += parseFloat(macros[i][5].replace(/[^\d.-]/g, ''));
            carbs += parseFloat(macros[i][6].replace(/[^\d.-]/g, ''));
        }

        let total = protein + fat + carbs;
        let carbsPercent = parseFloat((carbs / total).toFixed(2));
        let fatPercent = parseFloat((fat / total).toFixed(2));
        let proteinPercent = parseFloat((protein / total).toFixed(2));

        calories = calories.toFixed(2);
        fat = fat.toFixed(2);
        cholestral = cholestral.toFixed(2);
        sodium = sodium.toFixed(2);
        sugar = sugar.toFixed(2);
        protein = protein.toFixed(2);
        carbs = carbs.toFixed(2);
        
        let macrosFinal = {
            calories,
            fat,
            cholestral,
            sodium,
            sugar,
            protein,
            carbs,
            carbsPercent,
            fatPercent,
            proteinPercent,
        }    
        

        dispatch(success(macrosFinal))

    }

    function success(data) { return {type: mealsConstants.SET_MACROS_SUCESS, data}}
}