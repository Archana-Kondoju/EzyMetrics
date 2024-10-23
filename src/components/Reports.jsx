/**
 * The `Reports` component renders a section for generating reports in CSV and PDF formats.
 * 
 * The component displays a list of sample report data, including an ID, name, email, and status for each item.
 * It provides two buttons: one to export the data to a CSV file, and another to generate a PDF report.
 * 
 * The PDF report is generated using the `jspdf` library, and the CSV export is handled by the `react-csv` library.
 * 
 * The component also includes some informational text about the reports functionality and how to use it.
 */
import React from 'react';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';

const Reports = () => {
  // Dummy data for the report
  const reportData = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', dateAdded: '2024-10-10' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'Active', dateAdded: '2024-10-12' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'Inactive', dateAdded: '2024-10-15' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', status: 'Active', dateAdded: '2024-10-01' },
    { id: 5, name: 'Eva Green', email: 'eva@example.com', status: 'Inactive', dateAdded: '2024-10-16' },
    { id: 6, name: 'Frank Miller', email: 'frank@example.com', status: 'Active', dateAdded: '2024-10-21' },
    { id: 7, name: 'Grace Lee', email: 'grace@example.com', status: 'Inactive', dateAdded: '2024-10-10' },
    { id: 8, name: 'Hank Pym', email: 'hank@example.com', status: 'Active', dateAdded: '2024-10-13' },
    { id: 9, name: 'Ivy Carter', email: 'ivy@example.com', status: 'Active', dateAdded: '2024-10-23' },
    { id: 10, name: 'Jack Ryan', email: 'jack@example.com', status: 'Inactive', dateAdded: '2024-10-14' },
  ];

  // Columns for the CSV export
  const csvHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Status', key: 'status' },
  ];

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Report', 20, 10);
    reportData.forEach((row, index) => {
      doc.text(`${row.id}. ${row.name} (${row.email}) - ${row.status}`, 20, 20 + index * 10);
    });
    doc.save('report.pdf');
  };

  return (
    <div className="mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-4">Reports</h1>

      {/* CSV Export Button */}
      <CSVLink
        data={reportData}
        headers={csvHeaders}
        filename="report.csv"
        className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
      >
        Export to CSV
      </CSVLink>

      {/* PDF Export Button */}
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={generatePDF}>
        Export to PDF
      </button>

      {/* Informational Text */}
      <div className="mt-6">
        <h2 className="text-xl font-medium mb-2">Report Overview</h2>
        <p className="text-gray-700 mb-4">
          The reports section allows you to export data on leads and customers in either CSV or PDF format.
          You can use this functionality to generate quick reports for data analysis, performance tracking, or to share with team members.
        </p>
        <p className="text-gray-700 mb-4">
          Each report includes the following information for each lead or customer: ID, Name, Email, and Status.
          Use the "Export to CSV" button for spreadsheets or the "Export to PDF" button for printable documents.
        </p>
        <p className="text-gray-700">
          For more detailed insights and additional reporting features, check out the Analytics section of the dashboard.
        </p>
      </div>
    </div>
  );
};

export default Reports;