import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <>
    <div className='flex gap-4 items-baseline'>
     {/* Sidebar and Mobile Nav */}
      <nav>
        <div>
            <Sidebar />
        </div>
      </nav>
     {/* Main Content */}
     <main className=''>
       <Outlet />
     </main>
     </div>
    </>
  )
}

export default MainLayout