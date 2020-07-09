import { userConstants } from '../_constant/user.constant';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case userConstants.LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }
        case userConstants.LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        default:
            return state
    }
}


