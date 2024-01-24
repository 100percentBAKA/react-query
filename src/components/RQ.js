import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCustomApiData } from '../hooks/useCustomApiData'

export default function RQ() {

    const navigate = useNavigate()

    const { postID } = useParams()
    // console.log(postID)

    const BASE_URL = 'http://localhost:4000/posts'
    const ENDPOINT = postID

    const { isLoading, isFetching, data, isError, error, refetch } = useCustomApiData(BASE_URL, ENDPOINT)

    const handleClick = () => {
        // console.log(data?.data)
        navigate(-1)
    }

    return (
        <React.Fragment>
            <h2>RQ Custom fan page</h2>
            {
                isLoading || isFetching ?
                    (
                        <h2>Loading . . . </h2>
                    ) : isError ?
                        (
                            <h2>{error.message}</h2>
                        ) :
                        (
                            <div>
                                <div>
                                    Title ID: {data?.data.id}
                                </div>
                                <div>
                                    Title: {data?.data.title}
                                </div>
                                <button onClick={refetch}>Refetch</button>
                                <button onClick={handleClick}>Go Back</button>
                            </div>
                        )
            }
        </React.Fragment>
    )
}
