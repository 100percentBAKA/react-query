import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Homepage from "./components/Home.page"
import Traditionalpage from './components/Traditional.page';
import RQpage from "./components/RQ.page"
import RQ from './components/RQ';

import { ReactQueryDevtools } from "react-query/devtools"
import PQ from './components/PQ';
import DynamicParallel from './components/DynamicParallel';
import Testing from './components/Testing';
import TestingSub from './components/TestingSub';
import AddData from './components/AddData';
import CancelQuery from './components/CancelQuery';
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
          <li>
            <Link to="/pr-query">Parallel RQ</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/dynamic-parallel' element={<DynamicParallel ids={[1, 3]} />}></Route>
        <Route path='traditional' element={<Traditionalpage />}></Route>
        <Route path='rq' element={<RQpage />}></Route>
        <Route path='rq/:postID' element={<RQ />}></Route>
        <Route path='pr-query' element={<PQ />}></Route>
        <Route path='testing' element={<Testing />}>
          <Route path=':id' element={<TestingSub />} />
        </Route>
        {/* <Route path='testing/:id' element={<TestingSub />}></Route> */}
        <Route path='add-form' element={<AddData />}></Route>
        <Route path='cancel' element={<CancelQuery />} />
      </Routes>

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </React.Fragment>
  );
}

export default App;
