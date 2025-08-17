import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-0 '>
     {/* Sidebar and Mobile Nav */}
      <nav>
        <div>
            <Sidebar />
        </div>
      </nav>
     {/* Main Content */}
     <main className='flex-1'>
       <Outlet />
     </main>
     </div>
    </>
  )
}

export default MainLayout