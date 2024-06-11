import React from 'react';
import './App.css';
import Login from './componenets/pages/loginPage';
import Aanmelding from './componenets/pages/Aanmelding';
import Admin from './componenets/pages/AdminDashboard';
import DepartmentChange from './componenets/pages/DepartmentChange';
import Main from './componenets/pages/LoginMainpageSwitch';
import { Route, Routes } from 'react-router-dom';
import MainPage from './componenets/pages/Mainpage';
function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/login' element = {<Login/>} />
          <Route path='/Mainpage' element = {<MainPage/>} />
          <Route path='/Aanmelding' element = {<Aanmelding/>} />
          <Route path='/Admin' element = {<Admin/>} />
          <Route path='/change' element ={<DepartmentChange/>}/>
        </Routes>
      </div>
  );
}

export default App;
