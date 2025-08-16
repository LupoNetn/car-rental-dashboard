import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
     {/* Sidebar and Mobile Nav */}

     {/* Main Content */}
     <main>
       <Outlet />
     </main>
    </>
  )
}

export default MainLayout