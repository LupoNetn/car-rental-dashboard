import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-stretch gap-0 min-h-screen ">
        {/* Sidebar and Mobile Nav */}
        <nav className="md:bg-gray-950 md:fixed left-0 top-0 md:h-screen">
          <Sidebar />
        </nav>
        {/* Main Content */}
        <main className="flex-1 md:ml-50 lg:ml-53 min-h-screen overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
