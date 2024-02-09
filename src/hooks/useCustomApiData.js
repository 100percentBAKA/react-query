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

function fetchLoginData() {
    const URL = "http://localhost:4000/login"

    try {
        return axios.get(URL)
    } catch (error) {
        throw new Error(`Error fetching data from ${URL}\nError message: ${error.message}`)
    }
}

export const useCustomApiData = (baseurl, endpoint, options = {}) => {
    return useQuery([baseurl, endpoint], fetchData, options)
}

export const useAddFrenzData = () => {
    const client = useQueryClient()
    //! perform query invalidation to trigger the re fetch of what ever data is required to be displayed 
    return useMutation(addData, {
        onSuccess: () => {
            client.invalidateQueries('login-data')
        }
    })
}

export const useLoginData = () => {
    return useQuery('login-data', fetchLoginData, { enabled: true })
}