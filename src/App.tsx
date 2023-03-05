import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassPage from './pages/ForgotPassPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPassPage/>}/>
    </Routes>
  );
}

export default App;
