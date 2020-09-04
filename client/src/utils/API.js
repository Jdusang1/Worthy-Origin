import axios from "axios";

export default {
    getMarkets: searchTerm => {
        return axios.get(`https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${searchTerm}`)
    },

    getFood: searchTerm => {
        return axios.get(`/api/foods/${searchTerm}`)
    },

    getUser: currentUser => {
        return axios.get(`/api/users/${currentUser}`)
    },

    createUser: userData => {
        return axios.post(`/api/users`, userData)
    },

    populateList: id => {
        return axios.get(`/api/users/populate/${id}`)
    },

    findUsers: () => {
        return axios.get(`/api/users`)
    },

    addItem: (id, currentUser) => {
        return axios.get(`/api/foods/item/${id}?currentUser=${currentUser}`)
    },

    removeItem: (id, currentUser) => {
        return axios.get(`/api/foods/remove/${id}?currentUser=${currentUser}`)
    }



}