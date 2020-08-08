import { userConstants } from '../Actions/types';

const initialState = {
    meals: 3,
    budget: 30,
    people: 1,
    breakfast: true,
    lunch: true,
    dinner:true,
    snack: false,
    snacks: 0,
}

export function user(state=initialState, action) {
    switch(action.type) {
        /* Registration */
        case userConstants.USER_REG_SUCCESS:
            {
            const {
                meals,
                budget,
                breakfast,
                lunch,
                dinner,
                snack,
                snacks,
                people,
            } = action.data;
            return {
                ...state,
                meals: meals,
                budget: budget,
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner,
                snack: snack,
                snacks: snacks,
                people: people,
            }
            }

        /* Default */
        default:
            return state;
    }
}