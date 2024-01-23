import { useQuery } from "react-query"
import axios from "axios"

const useApiData = (endpoint, options = {}) => {
    return useQuery(endpoint, async () => {
        try {
            const response = await axios.get(`http://localhost:4000/${endpoint}`)
            return response
        }
        catch (err) {
            throw new Error('Error fetching data from the API')
        }
    }, options)
}

export default useApiData