import { authHeader } from '../_helpers/auth-header';
import API from '../_helpers/api'
import config from '../_helpers/config'

export const userService = {
    login,
    logout,
    // getUserName
}


function login(username, password) {

    var requestParameters = {
        "username": username,
        "password": password
    }

    return new Promise((resolve, reject) => {

        API.post('login', requestParameters)
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                return resolve(true)
            }).catch(error => {
                return reject(error)
                // return reject(new Error("Invalid username or password"))
            });

    })
}

function logout() {
    localStorage.removeItem('user');
}

// function getUserName() {
//     return new Promise((resolve, reject) => {

//         const requestOptions = {
//             method: 'POST',
//             headers: authHeader()
//         };

//         return fetch(`${config.server}/get_user_name`, requestOptions).then(handleResponse);

//         // API.post('/get_user_name', {}, {
//         //     headers: authHeader()
//         // })
//         //     // .then(handleResponse)
//         //     .then(response => {
//         //         handleResponse(response)
//         //         return resolve(response.data);
//         //     }).catch(error => {
//         //         return reject(new Error("Server error occured"))
//         //     });
//     })
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api

                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}



