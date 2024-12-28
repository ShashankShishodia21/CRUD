import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from './Users.jsx';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Users />} ></Route>
          <Route path='/create' element = {<CreateUser/>} ></Route>
          <Route path='/update/:id' element = {<UpdateUser/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 