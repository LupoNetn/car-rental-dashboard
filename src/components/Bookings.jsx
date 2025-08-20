import React, { useState } from "react";

const Bookings = () => {
  // Sample booking data (you can replace with real API data later)
  const [bookings, setBookings] = useState([
    {
      id: "BKG001",
      customer: "John Doe",
      date: "2025-08-21",
      time: "10:00 AM",
      status: "Upcoming",
      service: "Airport Pickup",
    },
    {
      id: "BKG002",
      customer: "Jane Smith",
      date: "2025-08-18",
      time: "2:30 PM",
      status: "Completed",
      service: "City Ride",
    },
    {
      id: "BKG003",
      customer: "Michael Brown",
      date: "2025-08-19",
      time: "5:00 PM",
      status: "Cancelled",
      service: "Outstation Trip",
    },
  ]);

  // State to filter bookings
  const [filter, setFilter] = useState("All");

  // State for booking form inputs
  const [formData, setFormData] = useState({
    customer: "",
    service: "",
    date: "",
    time: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a fake booking ID
    const newBooking = {
      id: `BKG${(bookings.length + 1).toString().padStart(3, "0")}`,
      customer: formData.customer,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      status: "Upcoming",
    };
    setBookings([newBooking, ...bookings]); // Add new booking to state
    setFormData({ customer: "", service: "", date: "", time: "" }); // Reset form
  };

  // Filtered bookings based on selected filter
  const filteredBookings =
    filter === "All" ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Bookings
      </h1>

      {/* --- Booking Form --- */}
      <div className="bg-white p-6 rounded-2xl shadow border-gray-400 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Create Booking</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Customer Name"
            className="px-4 py-2 border-gray-400 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Service Type"
            className="px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="px-4 py-2 border-gray-400 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="px-4 py-2 border-gray-400 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <button
            type="submit"
            className="col-span-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 rounded-lg hover:opacity-90 transition"
          >
            Add Booking
          </button>
        </form>
      </div>

      {/* --- Filter Tabs --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {["All", "Upcoming", "Completed", "Cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                filter === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 border hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Booking Cards --- */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition border-gray-500"
          >
            {/* Booking ID & Status */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">#{booking.id}</span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  booking.status === "Upcoming"
                    ? "bg-blue-100 text-blue-700"
                    : booking.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {booking.status}
              </span>
            </div>

            {/* Customer & Service */}
            <h2 className="text-lg font-semibold text-gray-800">
              {booking.customer}
            </h2>
            <p className="text-sm text-gray-500">{booking.service}</p>

            {/* Date & Time */}
            <div className="mt-4 text-sm text-gray-600">
              <p>📅 {booking.date}</p>
              <p>⏰ {booking.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
