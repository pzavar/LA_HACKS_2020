import {mealsConstants} from './types';
import {history} from '../../Utils/history';
import {url} from '../../Utils/url';
import axios from 'axios';


export const mealsActions ={
    getWeeklyMeals,
}

function getWeeklyMeals() {
    return dispatch => {
        dispatch(request())
        axios.get("http://localhost:8080/meals/week")
        .then((response) =>{
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