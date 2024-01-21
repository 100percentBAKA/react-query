import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Homepage from "./components/Home.page"
import Traditionalpage from './components/Traditional.page';
import RQpage from "./components/RQ.page"

import { ReactQueryDevtools } from "react-query/devtools"
function App() {
  return (
    <React.Fragment>
      <nav>
        <ul style={{ display: "flex", flexDirection: 'row', columnGap: 40 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/traditional">Traditional</Link>
          </li>
          <li>
            <Link to="/rq">React Query</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='traditional' element={<Traditionalpage />}></Route>
        <Route path='rq' element={<RQpage />}></Route>
      </Routes>

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </React.Fragment>
  );
}

export default App;
