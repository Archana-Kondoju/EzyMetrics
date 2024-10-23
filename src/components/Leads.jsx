/**
 * The Leads component displays a table or card layout of lead data, allowing the user to view details of a selected lead.
 *
 * The component uses the `leads` data from `../dummyData` to populate the table or card layout. It also imports the `Modal` component and the `FaEye` icon from `react-icons/fa`.
 *
 * The table layout is shown for larger screens, while the card layout is shown for mobile screens.
 */
import React, { useState } from 'react';
import { leads } from '../dummyData';
import Modal from './Modal';
import { FaEye } from 'react-icons/fa'; // Import the eye icon from react-icons

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-4">Leads</h1>
      
      {/* For larger screens, show table layout */}
      <div className="hidden lg:block">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date Added</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.status}</td>
                <td className="p-4">{lead.dateAdded}</td>
                <td className="p-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
                    onClick={() => setSelectedLead(lead)}
                  >
                    {/* Eye icon for mobile, full text for larger screens */}
                    <span className="block lg:hidden">
                      <FaEye />
                    </span>
                    <span className="hidden lg:block">View Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* For mobile screens, use card layout */}
      <div className="lg:hidden space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="mb-2"><strong>Name:</strong> {lead.name}</p>
            <p className="mb-2"><strong>Email:</strong> {lead.email}</p>
            <p className="mb-2"><strong>Status:</strong> {lead.status}</p>
            <p className="mb-2"><strong>Date Added:</strong> {lead.dateAdded}</p>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded flex items-center justify-center w-auto mx-auto mt-2"
              onClick={() => setSelectedLead(lead)}
            >
              <FaEye className="mr-2" />
              View Details
            </button>
          </div>
        ))}
      </div>
      
      {selectedLead && <Modal lead={selectedLead} onClose={() => setSelectedLead(null)} />}
    </div>
  );
};

export default Leads;
