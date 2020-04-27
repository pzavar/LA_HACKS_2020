import { combineReducers } from 'redux';
import { meals } from './MealsReducer';
import { auth } from './AuthReducer';
import { user } from './UserReducer';

const rootReducer = combineReducers({
    auth,
    meals,
    user,
})

export default rootReducer;