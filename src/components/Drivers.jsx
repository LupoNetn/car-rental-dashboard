import React, { useState } from "react";
import { Star, Phone, MapPin, Bell } from "lucide-react"; // added Bell icon

const Drivers = () => {
  // Dummy driver data
  const drivers = [
    {
      id: 1,
      name: "John Doe",
      phone: "+1234567890",
      location: "Lagos, Nigeria",
      trips: 120,
      rating: 4.8,
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+234812345678",
      location: "Abuja, Nigeria",
      trips: 98,
      rating: 4.6,
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      phone: "+234701234567",
      location: "Port Harcourt, Nigeria",
      trips: 75,
      rating: 4.2,
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  // State for selected driver
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);

  return (
    <div className="p-6 space-y-6">
      {/* --- Driver Profile Card --- */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Driver Image */}
        <div className="relative">
          <img
            src={selectedDriver.image}
            alt={selectedDriver.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
            3
          </span>
        </div>

        {/* Driver Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
            {selectedDriver.name}
            <Bell size={18} className="text-blue-500" />
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2 text-gray-600 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{selectedDriver.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{selectedDriver.location}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 mt-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">{selectedDriver.trips}</p>
              <p className="text-sm text-gray-500">Trips</p>
            </div>
            <div className="flex items-center gap-1 text-center">
              <Star size={18} className="text-yellow-500" />
              <p className="text-lg font-bold text-gray-800">{selectedDriver.rating}</p>
            </div>
            <div className="text-center">
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full shadow-sm ${
                  selectedDriver.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {selectedDriver.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Drivers Table --- */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Driver</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Trips</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr
                key={driver.id}
                className={`border-b hover:bg-blue-50 cursor-pointer transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
                onClick={() => setSelectedDriver(driver)}
              >
                {/* Driver column with image */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                  />
                  <span className="font-medium text-gray-800">{driver.name}</span>
                </td>
                <td className="px-6 py-4">{driver.phone}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <MapPin size={14} className="text-gray-500" />
                  {driver.location}
                </td>
                <td className="px-6 py-4">{driver.trips}</td>
                <td className="px-6 py-4 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" /> {driver.rating}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
                      driver.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {driver.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drivers;
