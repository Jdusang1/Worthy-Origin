import axios from "axios";

export default {
    getMarkets: location => {
        return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${location}`)
    }
}