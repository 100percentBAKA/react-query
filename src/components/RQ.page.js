import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchComment = () => {
    return axios.get("http:localhost:4000/comments")
}

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
    const { isLoading, data } = useQuery('comments', fetchComment)
    return (
        <React.Fragment>
            {
                isLoading ?
                    <h2>Loading . . ..</h2> :
                    <div>
                        {
                            data?.data.map((element) => (
                                <div key={element.id}>
                                    Comment: {element.text}
                                    PostID: {element.postId}
                                </div>
                            ))
                        }
                    </div>
            }
        </React.Fragment>
    )
}
