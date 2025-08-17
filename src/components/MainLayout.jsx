import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-stretch gap-0 min-h-screen">
        {/* Sidebar and Mobile Nav */}
        <nav className="md:bg-gray-950">
          <Sidebar />
        </nav>
        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
