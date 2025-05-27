import React from 'react'
import Header from '../Components/Header'
import Offers from '../Components/Offers'
import Services from '../Components/Services'
import Restaurents from '../Components/Restaurents'
import Locations from '../Components/Locations'
import Reviews from '../Components/Reviews'

import Book from '../Components/Book'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Ourevents from '../Components/Ourevents'
import Works from '../Components/works'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Offers />
        <Works />
        <Services />
        <Restaurents />
        <Locations />
        {/* <Reviews /> */}
        {/* <Ourevents /> */}
       
        <Book />
        <Footer />
      
        
        
       
    </div>
  )
}

export default Homepage