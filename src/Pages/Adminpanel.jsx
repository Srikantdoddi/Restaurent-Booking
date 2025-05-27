import React from 'react'
import Adminmenu from '../Components/Adminmenu'
import Dashboard from '../Components/Dashboard'
import Piechart from '../Components/Piecharrt'
import UserRestaurtent from './UserRestaurtent'

const Adminpanel = () => {
  return (
    <div>
        <Adminmenu />
        <Dashboard />
        {/* <Piechart /> */}
        
    </div>
  )
}

export default Adminpanel