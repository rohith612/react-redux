import { userConstants } from '../_constant/user.constant';


const initialState = {
    userRequest: false,
    userData: null,
    userError: null,
    userInfo : {}
}


export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETNAME_REQUEST:
            return {
                ...state,
                userRequest: action.userRequest
            }
        case userConstants.GETNAME_SUCCESS:
            return {
                ...state,
                userData: action.users
            }
        case userConstants.GETNAME_FAILURE:
            return {
                ...state,
                userError: action.error
            }
        case userConstants.GETINFO_SUCCESS:
            return {
                ...state,
                userInfo : action.users
            }
        default:
            return state

    }

}