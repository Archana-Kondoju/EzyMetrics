/**
 * The main React component that renders the application's user interface.
 * It sets up the routing and renders the Sidebar and main content area.
 * The main content area contains the routes for the Dashboard, Leads, Analytics, and Reports components.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar />
        {/* Main content area */}
        <div className="flex-grow p-4 lg:ml-64"> {/* Adds padding and shifts content right when sidebar is open */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
