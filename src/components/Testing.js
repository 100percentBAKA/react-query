import React from 'react'
import { useQuery } from 'react-query'
import { Link, Outlet } from 'react-router-dom'
import { useCustomApiData } from '../hooks/useCustomApiData'

const BASE_URL = "http://localhost:4000"
const ENDPOINT = "frenz"

export default function Testing() {

    const { data, isLoading, isFetching, error, isError, refetch } = useCustomApiData(BASE_URL, ENDPOINT, {})
    console.log(data?.data)

    return (
        <div>
            {
                isLoading ? <h1>Loading...</h1> : isError ? <h1>Error: {error.message}</h1> : (
                    <div>Hello world
                        <ul>
                            {
                                data?.data.map((id) => <li key={id.id}><Link to={id.id}>{id.title}</Link></li>)
                            }
                        </ul>
                        <button onClick={refetch}>Refetch</button>
                        <Outlet />
                    </div>
                )
            }
        </div>
    )
}
