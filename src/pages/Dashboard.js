import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const stats = [
    { title: 'Total Properties', value: '24', change: '+2 this month', color: '#3498db' },
    { title: 'Active Tenants', value: '18', change: '+1 this week', color: '#27ae60' },
    { title: 'Monthly Revenue', value: '$12,450', change: '+8.2%', color: '#f39c12' },
    { title: 'Maintenance Requests', value: '3', change: '-2 from last week', color: '#e74c3c' }
  ];

  const recentActivities = [
    { id: 1, type: 'New Tenant', description: 'John Smith moved into Apartment 4B', time: '2 hours ago' },
    { id: 2, type: 'Maintenance', description: 'Fixed heating issue in Unit 12', time: '5 hours ago' },
    { id: 3, type: 'Payment', description: 'Rent payment received from Sarah Johnson', time: '1 day ago' },
    { id: 4, type: 'Property', description: 'Added new property: Downtown Loft', time: '2 days ago' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Property inspection - Building A', due: 'Today, 2:00 PM' },
    { id: 2, task: 'Lease renewal - Unit 7C', due: 'Tomorrow, 10:00 AM' },
    { id: 3, task: 'Maintenance check - Rooftop Garden', due: 'Oct 22, 9:00 AM' },
    { id: 4, task: 'New tenant meeting - Apartment 3A', due: 'Oct 23, 3:00 PM' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your properties.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4">
        {stats.map((stat, index) => (
          <div key={index} className="card stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              📊
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginTop: '30px' }}>
        {/* Recent Activities */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activities</h2>
          </div>
          <div className="activities-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-description">{activity.description}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Upcoming Tasks</h2>
          </div>
          <div className="tasks-list">
            {upcomingTasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-description">{task.task}</div>
                <div className="task-due">{task.due}</div>
                <button className="btn btn-sm btn-primary">Mark Complete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;