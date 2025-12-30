import React, { useState } from 'react';
import { FaTicketAlt, FaTools, FaCheckCircle, FaExclamationTriangle, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './TechnicianDashboard.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const TechnicianDashboard = () => {
  const [availability, setAvailability] = useState('available'); // available, busy, offline

  const stats = {
    assigned: 12,
    inProgress: 5,
    resolvedToday: 8,
    highPriority: 3
  };

  const chartData = [
    { name: 'Open', value: 7 },
    { name: 'In Progress', value: 5 },
    { name: 'Resolved', value: 8 },
    { name: 'Closed', value: 15 }
  ];

  const todaysTasks = [
    { id: 'TKT-001', title: 'Printer not working - Room 204', priority: 'High' },
    { id: 'TKT-002', title: 'Software installation - Adobe Photoshop', priority: 'Medium' },
    { id: 'TKT-005', title: 'Monitor flickering', priority: 'Medium' },
    { id: 'TKT-007', title: 'Laptop overheating', priority: 'High' },
  ];

  return (
    <div className="user-layout">
      <TechnicianSidebar />

      <div className="main-content">
        {/* Top Header with Status & Profile */}
        <div className="top-header">
          <h2>Technician Dashboard</h2>
          <div className="user-info">
            <span>Welcome back!</span>

            {/* Availability Status */}
            <div className="availability-status dashboard-status">
              <span className={`status-dot ${availability}`}></span>
              <span className="status-text">
                {availability === 'available' ? 'Available' : 
                 availability === 'busy' ? 'Busy' : 
                 'Offline'}
              </span>
              <button 
                className="status-toggle-btn"
                onClick={() => setAvailability(
                  availability === 'available' ? 'busy' : 
                  availability === 'busy' ? 'offline' : 'available'
                )}
              >
                Change
              </button>
            </div>

            {/* Profile Link */}
            <Link to="/technician/profile" className="profile-link">
              <FaUser className="profile-icon" />
              <div className="avatar">T</div>
            </Link>
          </div>
        </div>

        <div className="tech-dashboard-container">
          {/* Stats Cards */}
          <div className="tech-stats-grid">
            <div className="tech-stat-card assigned">
              <FaTicketAlt className="stat-icon" />
              <div className="stat-info">
                <h3>{stats.assigned}</h3>
                <p>Assigned Tickets</p>
              </div>
            </div>

            <div className="tech-stat-card in-progress">
              <FaTools className="stat-icon" />
              <div className="stat-info">
                <h3>{stats.inProgress}</h3>
                <p>In Progress</p>
              </div>
            </div>

            <div className="tech-stat-card resolved">
              <FaCheckCircle className="stat-icon" />
              <div className="stat-info">
                <h3>{stats.resolvedToday}</h3>
                <p>Resolved Today</p>
              </div>
            </div>

            <div className="tech-stat-card high-priority">
              <FaExclamationTriangle className="stat-icon" />
              <div className="stat-info">
                <h3>{stats.highPriority}</h3>
                <p>High Priority</p>
              </div>
            </div>
          </div>

          {/* Chart + Today's Tasks */}
          <div className="tech-body-grid">
            <div className="chart-card">
              <h3>Ticket Status Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="tasks-card">
              <h3>Today's Tasks</h3>
              <div className="tasks-list">
                {todaysTasks.map(task => (
                  <div key={task.id} className="task-item">
                    <div className="task-info">
                      <strong>{task.id}</strong>
                      <p>{task.title}</p>
                    </div>
                    <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;