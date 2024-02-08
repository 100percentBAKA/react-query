import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

async function fetchData({ queryKey }) {
    const [baseurl, endpoint] = queryKey
    try {
        return await axios.get(`${baseurl}/${endpoint}`)
    } catch (error) {
        throw new Error(`Error fetching data from the ${baseurl}`)
    }
}

async function addData(data) {
    try {
        return await axios.post("http://localhost:4000/login", data)
    } catch (error) {
        throw new Error(`Error adding data to the server.`)
    }
}

export const useCustomApiData = (baseurl, endpoint, options = {}) => {
    return useQuery([baseurl, endpoint], fetchData, options)
}

export const useAddFrenzData = () => {
    return useMutation(addData)
}