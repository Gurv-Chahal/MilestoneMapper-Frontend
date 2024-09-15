import axios from "axios";
import {getToken} from "./AuthService.js";

// creating rest api calls to backend using axios

const BASE_REST_API_URL = "http://localhost:8080/api/milestones";

// add a request interceptor
axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();

    return config;
}, function (error) {
    return Promise.reject(error);
});



export function getAllMilestones() {
    return axios.get(BASE_REST_API_URL);
}

export function addMilestone(milestone) {
    return axios.post(BASE_REST_API_URL, milestone);
}

export function getMilestoneById(id) {
    return axios.get(BASE_REST_API_URL + '/' + id);
}

export function updateMilestone(id, milestone) {
    return axios.put(BASE_REST_API_URL + '/' + id, milestone);
}

export function deleteMilestone(id) {
    return axios.delete(BASE_REST_API_URL + '/' + id);
}

export function finishMilestone(id) {
    return axios.patch(BASE_REST_API_URL + '/' + id + '/complete');
}

export function notCompleteMilestone(id) {
    return axios.patch(BASE_REST_API_URL + '/' + id + '/not-complete');
}