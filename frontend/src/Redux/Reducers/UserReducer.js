import { userConstants } from '../Actions/types';

const initialState = {

    meals: 0,
    budget: 0,
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
                snacks,
            } = action.data;
            return {
                ...state,
                meals: meals,
                budget: budget,
                snacks: snacks,
            }
            }

        /* Default */
        default:
            return state;
    }
}