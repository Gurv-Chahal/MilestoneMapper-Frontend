import axios from 'axios';

const AUTH_REST_API_BASE_URL = 'http://localhost:8080/api/auth';

export function registerAPICall(registerObj) {
    return axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);
}

export const loginAPICall = (usernameOrEmail, password) => {
    return axios.post(AUTH_REST_API_BASE_URL + '/login', {usernameOrEmail, password});
}

// store token
export const storeToken = (token) => {
    return localStorage.setItem("token", token);
}

// get token
export const getToken = () => {
    return localStorage.getItem("token");
}

// localstorage doesnt expire, sessionstorage expires
export const saveLoggedInUser = (username) => {
    return sessionStorage.setItem("authenticatedUser", username);
}

export const isUserLoggedIn = () => {

    const username = sessionStorage.getItem("authenticatedUser");

    if (username == null) {
        return false
    } else {
        return true;
    }

}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}