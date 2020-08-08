import { combineReducers } from 'redux';
import { meals } from './MealsReducer';
import { user } from './UserReducer';

const rootReducer = combineReducers({
    meals,
    user,
})

export default rootReducer;