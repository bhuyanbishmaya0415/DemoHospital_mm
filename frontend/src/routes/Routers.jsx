import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctor.jsx'
import DoctorDetails from '../pages/Doctors/DoctorDetails.jsx'

import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
    
    </Routes>
  
};

export default Routers;