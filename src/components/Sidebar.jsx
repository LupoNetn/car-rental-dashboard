import React, { useState } from "react";
import { Home, User, Calendar, Bell, Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from '../assets/Frame.png'

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: "Dashboard", icon: <Home size={22} />, path: "/" },
    { id: 2, name: "Drivers", icon: <User size={22} />, path: "/drivers" },
    { id: 3, name: "Bookings", icon: <Calendar size={22} />, path: "/bookings" },
    { id: 4, name: "Notifications", icon: <Bell size={22} />, path: "/notifications" },
    { id: 5, name: "Settings", icon: <Settings size={22} />, path: "/settings" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="w-40 md:w-35 h-screen flex flex-col items-start py-6 space-y-6 md:bg-gray-950 bg-black/60 max-md:backdrop-blur-2xl text-white">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="p-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
          onClick={() => setIsOpen(false)} // close on mobile
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
      <hr className="text-gray-600"/>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-gray-950 p-4">
        <div className="px-2 py-5 flex gap-3 items-center">
            <img src={Logo} alt="" />
            <h1 className="text-lg font-bold text-white">CAR RENTAL</h1> 
        </div>
        <SidebarContent />
      </div>

      {/* Mobile Top Navbar */}
      <nav className="md:hidden w-full bg-gray-950 text-white px-4 py-3 flex justify-between items-center">
        {/* Menu Toggle */}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Company Logo/Name */}
       <div className="flex gap-1 items-center">
          <img src={Logo} alt="" />
         <h1 className="text-lg font-bold">CAR RENTAL</h1>
       </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <SidebarContent />

          {/* Transparent overlay (click to close) */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
