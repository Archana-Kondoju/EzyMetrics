# EzyMetric Dashboard

EzyMetric Dashboard is a responsive web application designed for managing leads and generating reports. It features a customizable dashboard with visualizations, a lead management section, and a basic reporting tool.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [FolderStructure](#Folder-Structure)
- [Usage](#usage)

## Features

- **Sidebar Navigation**: Quick access to Dashboard, Leads, Analytics, and Reports.
- **Customizable Widgets**: Users can add, remove, and rearrange widgets on the dashboard.
- **Lead Management**: Displays dummy lead data with a modal/sidebar for detailed information.
- **Reporting Tool**: Generate reports in PDF and CSV formats.
- **Responsive Design**: Fully functional on both desktop and mobile devices.
- **Data Visualization**: Utilizes Chart.js for visualizing performance metrics.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces, enabling a component-based architecture.
- **Tailwind CSS**: A utility-first CSS framework for styling the application, allowing for rapid UI development.
- **Chart.js**: A JavaScript library for creating beautiful and interactive data visualizations.
- **react-chartjs-2**: A wrapper for Chart.js that integrates it with React for easier data visualization.
- **react-csv**: A library for exporting data in CSV format, making it easy to download data as CSV files.
- **jspdf**: A library for generating PDF documents in JavaScript, useful for creating downloadable reports.
- **react-beautiful-dnd**: A library for implementing drag-and-drop functionality in React applications.

## Installation

To set up the EzyMetric Dashboard locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ezyMetric-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ezy-metric-dashboard
   ```
3. Install the required dependencies:
  ```bash
  npm install
  ```
4. Start the frontend application:
  ```bash
  npm start
  ```

## Folder Structure
```
EzyMetrics-Dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Dashboard.js
│   │   ├── Leads.js
│   │   ├── Analytics.js
│   │   ├── Reports.js
│   │   ├── Modal.js
│   │   ├── Widget.jsx
│   ├── dummyData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── README.md
├── package.json
└── tailwind.config.js
```

# Usage

## Navigating the Dashboard
Click on the sidebar links to navigate between sections.

## Customizing Widgets
Interact with the dashboard to add, remove, or rearrange widgets.

## Viewing Leads
Click on a lead in the Lead Management section to view detailed information in a modal/sidebar.

## Generating Reports
Use the reporting tool to create and download reports in PDF or CSV format.