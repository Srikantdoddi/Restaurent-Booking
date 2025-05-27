import React from 'react'
import Eventheader from '../Components/Eventheader'
import Events from '../Components/Events'
import Faq from '../Components/Faq'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Eventpage = () => {
  return (
    <div>
      <Navbar />
      <Eventheader />
      <Events />
      <Faq />
      <Footer />
    </div>
  )
}

export default Eventpage
