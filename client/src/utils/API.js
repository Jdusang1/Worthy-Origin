import axios from "axios";

export default {
    //zip code search on farmers market page
    getMarkets: searchTerm => {
        return axios.get(`https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${searchTerm}`)
    },
    //when user clicks on farmers market, gets the details for that market 
    getSelectedMarket: id => {
        return axios.get(`https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`)
    },
    //finding food item from database that user searches
    getFood: searchTerm => {
        return axios.get(`/api/foods/${searchTerm}`)
    },
    //getting user after logging in with Auth0 and setting it as currentUser 
    getUser: currentUser => {
        return axios.get(`/api/users/${currentUser}`)
    },
    //if user is not in database, it will hit createUser route to create user 
    createUser: userData => {
        return axios.post(`/api/users`, userData)
    },
    //if user is in database and has grocery data, it will populate saved grocery items 
    populateList: id => {
        return axios.get(`/api/users/populate/${id}`)
    },
    //finds all the users
    findUsers: () => {
        return axios.get(`/api/users`)
    },
    //will add selected item from search and add to groceryList array 
    addItem: (id, currentUser) => {
        return axios.get(`/api/foods/item/${id}?currentUser=${currentUser}`)
    },
    //will remove selected item from users grocery list
    removeItem: (id, currentUser) => {
        return axios.get(`/api/foods/remove/${id}?currentUser=${currentUser}`)
    }
}