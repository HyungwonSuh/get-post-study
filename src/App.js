import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Users from './components/Users'
import Contents from './components/Contents'
import { useState, useEffect } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StyledButton><Link to="/home">home</Link></StyledButton>
        <StyledButton><Link to="/users">user-list</Link></StyledButton>
        <StyledButton><Link to="/contents">contents</Link></StyledButton>
          <Routes>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='contents' element={<Contents></Contents>}></Route>
          </Routes>
      </BrowserRouter>
    </div>

);
}
const StyledButton = styled.span`
a{
  display: inline-block;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  background-color: lightgray;
  color: black;
  text-decoration: none;
}
`

export default App;
