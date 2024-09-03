import React, { useState } from 'react';

const HomePages = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <div
        className={`transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[200px]'} 
                    transition-transform duration-300 ease-in-out bg-blue-600 w-64 p-6 fixed inset-y-0 left-0 z-30 flex flex-col`}
      >
        <div className="flex items-center justify-between mb-8 text-white">
          <h1 className={`text-xl font-bold `}>Inventory Management</h1>
          <button
            onClick={toggleSidebar}
            className="text-white bg-blue-700 hover:bg-blue-500 p-2 rounded-md focus:outline-none"
          >
            {isSidebarOpen ? '<' : '>'}
          </button>
        </div>
        <ul className={`${isSidebarOpen ? 'block' : 'hidden'} space-y-4 text-white`}>
          <li>
            <a href="#dashboard" className="block hover:bg-blue-500 rounded-lg p-2">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#calendar" className="block hover:bg-blue-500 rounded-lg p-2">
              Calendar
            </a>
          </li>
          <li>
            <a href="#sales-reports" className="block hover:bg-blue-500 rounded-lg p-2">
              Sales Reports
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-12'} p-8`}>
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, James</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Section */}
        <section id="dashboard" className="mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Dashboard Overview</h3>
            <p className="text-gray-600">Overview of your inventory and activities.</p>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Calendar</h3>
            <p className="text-gray-600">Manage your inventory-related schedules.</p>
          </div>
        </section>

        {/* Sales Reports Section */}
        <section id="sales-reports">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Sales Reports</h3>
            <p className="text-gray-600">View and analyze your sales data.</p>
          </div>
        </section>
      </div>

      {/* Small Toggle Button when Sidebar is Hidden */}
      
    </div>
  );
};

export default HomePages;
