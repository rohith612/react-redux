import { userConstants } from '../_constant/user.constant'
import { history } from '../_helpers/history'
import { userService } from '../_service/user.service'


export const userAction = {
    login,
    logout,
    // getUserName
}


function setLoginPending(isLoginPending) {
    return {
        type: userConstants.LOGIN_PENDING,
        isLoginPending
    }
}


function setLoginSuccess(isLoginSuccess) {
    return {
        type: userConstants.LOGIN_SUCCESS,
        isLoginSuccess
    }
}

function setLoginError(loginError) {
    return {
        type: userConstants.LOGIN_ERROR,
        loginError
    }
}



function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(false))
        dispatch(setLoginSuccess(false))
        dispatch(setLoginError(false))

        userService.login(username, password)
            .then(success => {
                dispatch(setLoginPending(false))
                dispatch(setLoginSuccess(true))
                history.push('/')
            })
            .catch(err => {
                dispatch(setLoginPending(false))
                dispatch(setLoginError(err))
            })
    }
}


function setLogoutSuccess(){
    return {
        type: userConstants.LOG_OUT
    }
}

function logout(){
    return dispatch => {
        userService.logout();
        dispatch(setLogoutSuccess())
    }
}

////////////////////////////////////

// function getSuccessData(users) { 
//     return { 
//         type: userConstants.GETNAME_SUCCESS, 
//         users 
//     }
// }

// function getFailureData(error) { 
//     return { 
//         type: userConstants.GETNAME_FAILURE, 
//         error 
//     }
// }



// function getUserName(){
//     return dispatch => {
//         userService.getUserName()
//             .then(
//                 users => {
//                     let infoUserName = users.displayName;
//                     dispatch(getSuccessData(infoUserName))
//                 },
//                 error => { 
//                     dispatch(getFailureData(error));
//                 }
//             );
//     }; 
    
// }


