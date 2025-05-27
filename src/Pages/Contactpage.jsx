import React from 'react'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Contactheader from '../Components/Contactheader'
import Getintouch from '../Components/Getintouch'
import Map from '../Components/Map'
import Footer from '../Components/Footer'

const Contactpage = () => {
  return (
    <div>
        <Navbar />
        <Contactheader />
      <Contact />
      <Map />
      <Footer />
      {/* <Getintouch />  */}
    </div>
  )
}

export default Contactpage
