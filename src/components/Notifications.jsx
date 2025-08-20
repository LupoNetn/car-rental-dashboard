import React from "react";
import { Bell, CheckCircle, AlertCircle } from "lucide-react";

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, type: "success", message: "Your booking was confirmed." },
    { id: 2, type: "alert", message: "Driver John is running 10 mins late." },
    { id: 3, type: "success", message: "Payment received successfully." },
  ];

  return (
    <div className="p-6 min-h-screen max-w-[800px] mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Bell className="text-blue-600" /> Notifications
      </h1>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl shadow-md divide-y">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            {/* Icon + Message */}
            <div className="flex items-center gap-3">
              {note.type === "success" ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <AlertCircle className="text-red-500" />
              )}
              <p className="text-gray-700">{note.message}</p>
            </div>

            {/* Time / Action */}
            <span className="text-xs text-gray-400">2h ago</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

