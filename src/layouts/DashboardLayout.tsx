import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/navigation/Sidebar';
import TopBar from '../components/dashboard/navigation/TopBar';

const DashboardLayout = () => {
  return (
    <div id="dashboard" className="flex h-screen bg-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 