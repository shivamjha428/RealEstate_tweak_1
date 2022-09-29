import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Pg1 from './components/pg1';
import Pg2 from './components/pg2';
import Pg3 from './components/pg3';
import Pg4 from './components/pg4';
import Table from './components/Table';
import Pg0 from './components/pg';
import Protected from './components/protected';
const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup"element={<Signup/>}></Route>
      <Route path="/data" element={<Protected><Pg0/></Protected>}></Route>
      <Route path="/p1"element={<Protected><Pg1/></Protected>}></Route>
      <Route path='/p2' element={<Protected><Pg2/></Protected>}></Route>
      <Route path='/p3' element={<Protected><Pg3/></Protected>}></Route>
      <Route path='/p4' element={<Protected><Pg4/></Protected>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;