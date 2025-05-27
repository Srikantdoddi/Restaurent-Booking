import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Footer from './Components/Footer';
import Menupage from './Pages/Menupage';
import Eventpage from './Pages/Eventpage';
import Servicespage from './Pages/Servicespage';
import Tablespage from './Pages/Tablespage';
import Adminpanel from './Pages/Adminpanel';
import UserRestaurtent from './Pages/UserRestaurtent';
import SupportIssues from './Pages/SupportIssues';
import EventMoniterpage from './Pages/EventMoniterpage';
import Reportspge from './Pages/Reportspge';
import Restaurentpanel from './Pages/Restaurentpanel';
import Orderspage from './Pages/Orderspage';
import Restaurentpanelmenupage from './Pages/Restaurentpanelmenupage';
import Restaurenteventpage from './Pages/Restaurenteventpage';
import Restaurentdineinpage from './Pages/Restaurentdineinpage';
import Restaurentsettingpage from './Pages/Restaurentsettingpage';
import Chat from './Components/Chat';
import Contactpage from './Pages/Contactpage';
import Profilepage from './Pages/Profilepage';

const App = () => {
  return (
    <Router> 
      <Chat />
    
      <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<Menupage />} />
        <Route path="/login" element={<Loginpage />} />
        {/* <Route path='/events' element={<Eventpage />} /> */}
        <Route path='/services' element={<Servicespage />} />
        <Route path='/tables' element={<Tablespage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/admin/dashboard' element= {<Adminpanel />} />
        <Route path='/admin/userrestaurent' element={<UserRestaurtent />} />
        <Route path='/admin/supportissues' element={<SupportIssues />} />
        <Route path='admin/eventmoniter' element={<EventMoniterpage />} />
        <Route path='/admin/reports' element={<Reportspge />} />
        <Route path="/restaurant/dashboard" element={<Restaurentpanel />} />
        <Route path='/restaurent/orders' element={<Orderspage />} />
        <Route path='/restaurant/menu' element={<Restaurentpanelmenupage />} />
        <Route path='/restaurant/events' element={<Restaurenteventpage />} />
        <Route path='/restaurant/dining' element={<Restaurentdineinpage />} />
        <Route path='/restaurant/settings' element={<Restaurentsettingpage />} />
        <Route path='/profile' element={<Profilepage />} />

        
      </Routes>
           
    </Router>
    
  )
}

export default App
