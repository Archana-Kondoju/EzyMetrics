/**
 * The Dashboard component is the main view for the application's dashboard. It displays various widgets with data from the `dashboardData` object, and allows the user to drag and drop the widgets to reorder them.
 *
 * The component uses the `react-beautiful-dnd` library to handle the drag and drop functionality. The `handleDragEnd` function is called when the user drops a widget, and it updates the `widgets` state to reflect the new order.
 *
 * The component renders a grid of widgets, with each widget displayed in a card-like container. The widgets display a title and a value, and the user can rearrange them by dragging and dropping them.
 */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { dashboardData } from '../data';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: 'totalLeads', title: 'Total Leads', value: dashboardData.totalLeads },
    { id: 'totalRevenue', title: 'Total Revenue', value: dashboardData.totalRevenue },
    { id: 'conversionRate', title: 'Conversion Rate', value: dashboardData.conversionRate },
    { id: 'pendingTasks', title: 'Pending Tasks', value: dashboardData.pendingTasks },
  ]);

  // Handle drag and drop logic
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const reorderedWidgets = Array.from(widgets);
    const [removed] = reorderedWidgets.splice(source.index, 1);
    reorderedWidgets.splice(destination.index, 0, removed);

    setWidgets(reorderedWidgets);
  };

  return (
    <div className="mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="widgets" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white p-6 rounded-lg shadow"
                    >
                      <h2>{widget.title}</h2>
                      <p className="text-2xl font-bold">{widget.value}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;