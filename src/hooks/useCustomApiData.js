import { useQuery } from "react-query";
import axios from "axios";

async function fetchData({ queryKey }) {
    const [baseurl, endpoint] = queryKey
    try {
        return await axios.get(`${baseurl}/${endpoint}`)
    } catch (error) {
        throw new Error(`Error fetching data from the ${baseurl}`)
    }
}

export const useCustomApiData = (baseurl, endpoint, options = {}) => {
    return useQuery([baseurl, endpoint], fetchData, options)
}