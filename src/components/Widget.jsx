/**
 * A reusable React component that displays a widget with a title and data.
 *
 * props - The component props.
 * props.title - The title of the widget.
 * props.data - The data to be displayed in the widget.
 */
import React from 'react';

const Widget = ({ title, data }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-2xl font-bold mt-2">{data}</p>
    </div>
  );
};

export default Widget;
