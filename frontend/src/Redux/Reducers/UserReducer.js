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

    emailSignUpLoading: false,
    emailSignUpSuccess: false,
    emailSignUpError: false,
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
        
        /* Email SignUp for Waitlist */
        case userConstants.USER_SIGNUPEMAIL_REQUEST:
            return {
                ...state,
                emailSignUpError: false,
                emailSignUpLoading: true,
                emailSignUpSuccess: false,
            }

        case userConstants.USER_SIGNUPEMAIL_SUCCESS:
            return {
                ...state,
                emailSignUpLoading: false,
                emailSignUpSuccess: true,
            }

        case userConstants.USER_SIGNUPEMAIL_FAILURE:
            return {
                ...state,
                emailSignUpError: true,
                emailSignUpLoading: false,
                emailSignUpSuccess: false,
            }

        /* Default */
        default:
            return state;
    }
}