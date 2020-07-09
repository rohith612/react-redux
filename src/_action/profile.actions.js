import { userConstants } from '../_constant/user.constant'
import { history } from '../_helpers/history'
import { profileService } from '../_service/profile.service'


export const profileAction = {
    profileInfo,
    profileData
}


function setRequestData(isRequestPending) {
    return {
        type: userConstants.GETNAME_REQUEST,
        isRequestPending
    }
}


function setSuccessData(users) {
    return {
        type: userConstants.GETNAME_SUCCESS,
        users
    }
}


function setSuccessInfo(users) {
    return {
        type: userConstants.GETINFO_SUCCESS,
        users
    }
}

function setFailureData(error) {
    return {
        type: userConstants.GETNAME_FAILURE,
        error
    }
}


function profileInfo() {
    return dispatch => {
        dispatch(setRequestData(false))
        // dispatch(setSuccessData(null))
        // dispatch(setFailureData(null))
        profileService.profileName()
            .then(
                users => {
                    let infoUserName = users.displayName;
                    dispatch(setRequestData(true))
                    dispatch(setSuccessData(infoUserName))
                    // dispatch(setFailureData(null))
                },
                error => {
                    dispatch(setRequestData(true))
                    // dispatch(setSuccessData(null))
                    dispatch(setFailureData(error))
                }

            );
    };

}


function profileData() {
    return dispatch => {
        dispatch(setRequestData(false))
        profileService.profileDetails()
            .then(
                information => {
                    dispatch(setRequestData(true))
                    dispatch(setSuccessInfo(information.data))
                },
                error => {
                    dispatch(setRequestData(true))
                    dispatch(setFailureData(error))
                }
            );
    }
}