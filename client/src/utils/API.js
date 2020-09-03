import axios from "axios";

export default {
    getMarkets: searchTerm => {
        return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${searchTerm}`)
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

    populateList: currentUser => {
        return axios.get(`/api/users/${currentUser}`)
    },

    findUsers: () => {
        return axios.get(`/api/users`)
    }

    // addItem: id => {
    //     return axios.get(``)
    // }


}