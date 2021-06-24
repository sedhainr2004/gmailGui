import React from 'react'
import './SidebarMenu.css'

function SidebarMenu({Icon, Title, Notifications}) {
 return (
  <div className='sideBarMenu'>
   <Icon />
   <h3>{Title}</h3>
   <p>{ Notifications}</p>
   
   
  </div>
 )
}

export default SidebarMenu
