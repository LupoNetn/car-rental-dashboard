import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - fixed only on md+ */}
      <aside className="hidden md:fixed md:top-0 md:left-0 md:h-screen md:w-64 md:bg-gray-950">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
