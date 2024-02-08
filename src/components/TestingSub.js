import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomApiData } from '../hooks/useCustomApiData'

const BASE_URL = "http://localhost:4000"
const ENDPOINT = "company"

export default function TestingSub() {

  const { id } = useParams()
  const { data, isLoading, isError, isFetching, refetch } = useCustomApiData(BASE_URL, ENDPOINT)

  const companyName = data?.data.find((element) => element.frenzId === id)?.name

  return (
    <div>
      {
        isLoading || isFetching ? <h1>Loading...</h1> : isError ? <h1>Error: {isError.message}</h1> : (
          <div>
            {
              !companyName ? <div>nALLA</div> : <div>Works for: {companyName}</div>
            }
          </div>
        )
      }
    </div>
  )
}
