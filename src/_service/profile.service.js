import { authHeader } from '../_helpers/auth-header';
import API from '../_helpers/api'
import config from '../_helpers/config'
import { userService } from '../_service/user.service'


export const profileService = {
    profileDetails,
    profileName
}

const requestOptions = {
    method: 'POST',
    headers: authHeader()
};


function profileDetails(){
    return fetch(`${config.server}/get_user_info`, requestOptions).then(handleResponse);
}


function profileName(){
   
    return fetch(`${config.server}/get_user_name`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api

                userService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
