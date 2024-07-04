import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './Component/HomeComponet/HomeComponent';
import AboutComponent from './Component/AboutComponent/AboutComponent';
import DeptComponent from './Component/DepartmentComponent/DeptComponent';
import EventComponent from './Component/EventComponent/EventComponent';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='header'>
          <Link to='/' className='link'>Home</Link>
          <Link to='/about' className='link'>About</Link>
          <Link to='/department' className='link'>Departments</Link>
          <Link to='/events' className='link'>Events</Link>
        </div>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/department' element={<DeptComponent />} />
          <Route path='/events' element={<EventComponent />} />
        </Routes>
      </Router>
      <center className='footer'>
        <p className='footer2'>© 2024 Saveetha Engineering College. All rights reserved.</p>
      </center>
    </React.Fragment>
  );
}

export default App;
