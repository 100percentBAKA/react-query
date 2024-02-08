// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// export default function Traditionalpage() {

//     const [isLoading, setIsLoading] = useState(true)
//     const [data, setData] = useState([])

//     // state function to handle errors
//     const [error, setError] = useState('')

//     useEffect(() => {
//         axios.get('http://localhost:4000/comments').then((res) => {
//             setData(res.data)
//             setIsLoading(false)
//         }).catch(error => {
//             setError(error.message)
//         })
//     }, [])

//     //* observe that there are no dependencies to the useEffect, due to this reason the axios get handling will be performed only once, that is the data is fetched only on the initial render  

//     if (error) {
//         return (
//             <h2>{error}</h2>
//         )
//     }

//     if (isLoading) {
//         return (
//             <h2>Loading  . . . nigga  </h2>
//         )
//     }

//     return (
//         <React.Fragment>
//             {
//                 <div>
//                     {
//                         data.map((element) => (
//                             <div key={element.id}>
//                                 <div >
//                                     Comment:  {element.text}
//                                 </div>
//                                 <div>
//                                     Post ID: {element.postId}
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             }
//         </React.Fragment>
//     )
// }


import React from 'react'

export default function Traditionalpage() {
    return (
        <div>Traditional.page</div>
    )
}
