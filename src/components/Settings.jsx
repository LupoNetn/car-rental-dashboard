
import React, { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  // Toggle states for settings switches
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <div className="p-6 min-h-screen max-w-[800px] mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <SettingsIcon className="text-blue-600" /> Settings
      </h1>

      {/* Settings Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        {/* Profile Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Profile</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Preferences</h2>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Enable Notifications</span>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                notificationsEnabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  notificationsEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">Dark Mode</span>
            <button
              onClick={() => setDarkModeEnabled(!darkModeEnabled)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                darkModeEnabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  darkModeEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;