import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./components/Dashboard";
import Drivers from "./components/Drivers";
import Bookings from "./components/Bookings";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";

const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/notifications" element={<Notifications />}/>
              <Route path="/settings" element={<Settings />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
