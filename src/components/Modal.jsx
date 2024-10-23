/**
 * A React component that renders a modal dialog with details about a lead.
 */
import React from 'react';

const Modal = ({ lead, onClose }) => {
  return (
    /**
     * Renders a modal dialog with details about a lead.
     *
     * props - The component props.
     * props.lead - The lead object containing name, email, status, and dateAdded.
     * props.onClose - A callback function to be called when the modal is closed.
     */
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto p-4 mt-1/4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg max-h-full overflow-y-auto my-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Lead Details</h2>
        <p className="mb-2"><strong>Name:</strong> {lead.name}</p>
        <p className="mb-2"><strong>Email:</strong> {lead.email}</p>
        <p className="mb-2"><strong>Status:</strong> {lead.status}</p>
        <p className="mb-4"><strong>Date Added:</strong> {lead.dateAdded}</p>
        <button 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
