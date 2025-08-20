import React, { useState } from "react";
import { Home, User, Calendar, Bell, Settings, Menu, X, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom"; 
import Logo from "../assets/Frame.png";

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: "Dashboard", icon: <Home size={22} />, path: "/" },
    { id: 2, name: "Drivers", icon: <User size={22} />, path: "/drivers" },
    { id: 3, name: "Bookings", icon: <Calendar size={22} />, path: "/bookings" },
    { id: 4, name: "Notifications", icon: <Bell size={22} />, path: "/notifications" },
    { id: 5, name: "Settings", icon: <Settings size={22} />, path: "/settings" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // 🚪 You can hook this into your auth logic
    console.log("Logging out...");
  };

  const SidebarContent = () => (
    <div className="w-50 md:w-35 flex flex-col items-start py-6 space-y-2 md:bg-gray-950 bg-black/60 max-md:backdrop-blur-2xl text-white">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `w-full p-3 rounded-md flex items-center gap-2 transition 
            ${isActive ? "bg-blue-200 text-gray-900 font-semibold" : "hover:bg-gray-700"}`
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}

      {/* Divider */}
      <hr className="text-gray-600 w-full my-3" />

      {/* 🚪 Logout button */}
      <button
        onClick={handleLogout}
        className="w-full p-3 rounded-md flex items-center gap-2 transition cursor-pointer hover:bg-red-400 bg-red-50 text-gray-500 font-semibold"
      >
        <LogOut size={22} />
        <span>Logout</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:bg-gray-950 p-4 h-full overflow-y-auto">
        <div className="px-2 py-5 flex gap-3 items-center">
          <img src={Logo} alt="Logo" />
          <h1 className="text-lg font-bold text-white">CAR RENTAL</h1>
        </div>
        <SidebarContent />
      </div>

      {/* Mobile Navbar */}
      <nav className="md:hidden w-full bg-gray-950 text-white px-4 py-3 flex justify-between items-center">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="flex gap-1 items-center">
          <img src={Logo} alt="Logo" />
          <h1 className="text-lg font-bold">CAR RENTAL</h1>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <SidebarContent />
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
