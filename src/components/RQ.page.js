import React from 'react'

// * imports custom query hook
import useApiData from '../hooks/useApiData'

// * RRD imports
import { Link } from 'react-router-dom'

// * react skeleton loading imports
import Skeleton from 'react-loading-skeleton'

// * endpoints
const COMMENTS_ENDPOINT = "posts"



export default function RQpage() {

    // the useQuery method requires two arguments
    // 1) unique query key
    // 2) function which returns a promise

    // * A promise can be in one of three states 
    // * 1) Pending: The initial state. The promise is neither fulfilled nor rejected.
    // * 2) Fulfilled: The operation completed successfully, and the promise has a resulting value.
    // * 3) Rejected: The operation failed, and the promise has a reason for the failure.

    // * notice that we are not using useEffect hook, useQuery will internally handle caching, and will only perform refetch if and only if specifically asked 
    // * if the query key remains the same throughout, refetch will not be performed 

    const { isLoading, isFetching, data, refetch } = useApiData(COMMENTS_ENDPOINT, {
        enabled: false
    })

    // * CACHE TIME: useQuery performs caching of the data for a time period of 5 mins
    // * if the data to be fetched change, react query perform fetching ( isFetching )

    //* STALE TIME: amount of time after which re fetching has to be automatically performed 
    //* by default, react query sets the stale time to 0 ms, that is the data as soon as it arrives is termed to be 'stale'
    //* we can set the stale time by passing it as an object to the useQuery 

    // ? console.log(data.data)
    // ? console.log(`Loading: ${isLoading}, Fetching: ${isFetching}`)

    // if (isLoading || isFetching) {
    //     return (
    //         <h2>Loading . . . </h2>
    //     )
    // }

    // if (isError) {
    //     return (
    //         <h2>{error.message}</h2>
    //     )
    // }
    return (
        <React.Fragment>
            <h2>RQ page</h2>
            <button onClick={refetch}>Click</button>

            {
                isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    <div>
                        {
                            data?.data.map((element) => (
                                <div key={element.id}>
                                    <Link to={`/rq/${element.id}`}>{element.id} Comment: {element.title}</Link>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </React.Fragment>
    )
}

//! Refetch defaults:
// * refetchOnMount: true --> re fetch when a components is introduced into the DOM
// * refetchOnWindowFocus: true --> re fetch when the window / tab is brought back into focus
// * setting enables: false will disable both the above option


//! Polling:
// * polling refers to fetching data at regular intervals
// * for example: real time stock tracking, we need to update UI / fetch data every second
// * can be set by passing a object into the useQuery hook

//! diff b/w StaleTime and refreshInterval
// * use when periodic updates needed regardless of data's freshness
// * re fetch is only required when data becomes stale, no period refresh

