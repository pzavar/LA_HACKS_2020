import { combineReducers } from 'redux';
import { meals } from './MealsReducer';

const rootReducer = combineReducers({
    meals,
})

export default rootReducer;