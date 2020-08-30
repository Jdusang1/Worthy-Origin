import axios from "axios";

export default {
    getSelectedMarket: id => {
        return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`)
    }
};