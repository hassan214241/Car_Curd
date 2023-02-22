import { LOGIN ,LOGOUT, ACTIVE_USER} from '../types/Types';
const initialState = {
    isUserLoggedIn: false,
    userData: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                userData: action.payload,
                isUserLoggedIn: true,
            }
        }
        case ACTIVE_USER: {
            return {
                ...state,
                isUserLoggedIn: true,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;