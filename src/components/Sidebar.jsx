import React from "react";
import { Home, User, Calendar, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Frame from '../assets/Frame.png'

const Sidebar = () => {
  // Sidebar items (array of objects with path)
  const menuItems = [
    { id: 1, icon: <Home size={20} />, text: "Dashboard", path: "/" },
    { id: 2, icon: <User size={20} />, text: "Driver", path: "/driver" },
    { id: 3, icon: <Calendar size={20} />, text: "Bookings", path: "/bookings" },
    { id: 4, icon: <Bell size={20} />, text: "Notifications", path: "/notifications" },
    { id: 5, icon: <Settings size={20} />, text: "Settings", path: "/settings" },
  ];

  return (
    <div className="md:block w-54 h-screen bg-gray-950 text-white p-4">
     <div className="flex gap-2 items-center mb-8">
        <img src={Frame} alt="" />
        <h1>CAR RENT</h1>
     </div>

      {/* Map over the items */}
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer"
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr className="mt-5 text-gray-500"/>
    </div>
  );
};

export default Sidebar;
