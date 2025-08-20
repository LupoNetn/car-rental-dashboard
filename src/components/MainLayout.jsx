import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-gray-950">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
