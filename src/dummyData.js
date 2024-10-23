  /**
   * Dummy data for leads and metrics.
   * 
   * The `leads` array contains sample lead data with various statuses and dates.
   */
  export const leads = [
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

  /*
  The `metrics` object contains sample metrics data for the leads. 
   */
  export const metrics = {
    totalLeads: leads.length,
    totalRevenue: '$50,000',
    conversionRate: '25%',
    pendingTasks: '10',
  };  