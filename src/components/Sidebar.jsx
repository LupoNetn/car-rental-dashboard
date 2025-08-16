import React, { useState } from "react";
import { Home, User, Calendar, Bell, Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { id: 1, icon: <Home size={22} />, path: "/" },
    { id: 2, icon: <User size={22} />, path: "/drivers" },
    { id: 3, icon: <Calendar size={22} />, path: "/bookings" },
    { id: 4, icon: <Bell size={22} />, path: "/notifications" },
    { id: 5, icon: <Settings size={22} />, path: "/settings" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="w-16 h-screen flex flex-col items-center py-6 space-y-6 bg-gray-950 text-white">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="p-3 rounded-lg hover:bg-gray-700 transition"
          onClick={() => setIsOpen(false)} // close on mobile
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden p-4 bg-gray-950 text-white flex justify-between items-center">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <SidebarContent />

          {/* Transparent Overlay (click to close) */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
