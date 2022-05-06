import axios from "axios"

export let endpoints = {
    "medicine":"/medicine/",
    "category_medicine":"/category_medicine/",
    "oauth2-info":"/oauth2-info/",
    "login":"/o/token/",
    "current-user":"/users/current-user"
}

export default axios.create({
    baseURL:"http://localhost:8000/"
})