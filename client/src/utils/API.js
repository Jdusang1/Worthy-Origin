import axios from "axios";

export default {
    getMarkets: searchTerm => {
        return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${searchTerm}`)
    }

    
}