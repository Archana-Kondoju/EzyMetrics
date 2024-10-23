/**
 * The `Sidebar` component represents the sidebar navigation menu in the application.
 * It includes a hamburger menu for mobile/tablet devices and a fixed sidebar for larger screens.
 * The sidebar contains links to different pages of the application, such as Dashboard, Leads, Analytics, and Reports.
 * The sidebar can be toggled open and closed on mobile/tablet devices using the hamburger menu button.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger menu for mobile/tablet */}
      <div className="lg:hidden p-4 bg-gray-800 text-white fixed top-0 w-full flex justify-between items-center z-10">
        <h1 className="text-xl font-semibold">EzyMetrics</h1>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform transform fixed lg:fixed top-0 left-0 z-20 h-full w-64 bg-gray-800 text-white lg:block shadow-lg`}
      >
        <nav className="flex flex-col p-4 space-y-4 mt-16 lg:mt-0">
          <Link
            to="/dashboard"
            className="hover:bg-gray-700 p-2 rounded transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/leads"
            className="hover:bg-gray-700 p-2 rounded transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Leads
          </Link>
          <Link
            to="/analytics"
            className="hover:bg-gray-700 p-2 rounded transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Analytics
          </Link>
          <Link
            to="/reports"
            className="hover:bg-gray-700 p-2 rounded transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Reports
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
        />
      )}
    </div>
  );
};

export default Sidebar;
