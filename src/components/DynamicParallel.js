import React, { useEffect } from 'react';
import axios from 'axios'
import { useQueries } from 'react-query'


const fetchSomething = (id) => {
  return axios.get("http://localhost:4000/comments/" + id)
}

export default function DynamicParallel({ ids }) {

  const queries = useQueries(
    ids.map((id) => ({
      queryKey: ['comments', id],
      queryFn: () => fetchSomething(id)
    }))
  )

  console.log({ queries })

  return (
    <div>
      Hello world
    </div>
  )
}
