import React from 'react';
import { FaTicketAlt, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './Dashboard.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // Static data
  const ticketStats = [
    { name: 'Open', value: 8, color: '#ff6b6b' },
    { name: 'In Progress', value: 5, color: '#feca57' },
    { name: 'Resolved', value: 12, color: '#48dbfb' },
    { name: 'Closed', value: 20, color: '#1dd1a1' },
  ];

  const recentTickets = [
    { id: 'TKT-001', title: 'Printer not working', status: 'Open', priority: 'High', date: '2025-12-20' },
    { id: 'TKT-002', title: 'Software installation required', status: 'In Progress', priority: 'Medium', date: '2025-12-19' },
    { id: 'TKT-003', title: 'Network connectivity issue', status: 'Resolved', priority: 'High', date: '2025-12-18' },
    { id: 'TKT-004', title: 'Password reset', status: 'Closed', priority: 'Low', date: '2025-12-17' },
    { id: 'TKT-005', title: 'Monitor display problem', status: 'Open', priority: 'Medium', date: '2025-12-16' },
  ];

  const totalTickets = ticketStats.reduce((sum, stat) => sum + stat.value, 0);

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>User Dashboard</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="dashboard-container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <h1>Welcome back, User!</h1>
            <Link to="/user/new-ticket" className="new-ticket-btn">
                 <FaTicketAlt /> Raise New Ticket
              </Link>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card open">
              <FaTicketAlt className="icon" />
              <div>
                <h3>{ticketStats[0].value}</h3>
                <p>Open Tickets</p>
              </div>
            </div>
            <div className="stat-card in-progress">
              <FaClock className="icon" />
              <div>
                <h3>{ticketStats[1].value}</h3>
                <p>In Progress</p>
              </div>
            </div>
            <div className="stat-card resolved">
              <FaTools className="icon" />
              <div>
                <h3>{ticketStats[2].value}</h3>
                <p>Resolved</p>
              </div>
            </div>
            <div className="stat-card closed">
              <FaCheckCircle className="icon" />
              <div>
                <h3>{ticketStats[3].value}</h3>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Chart + Table */}
          <div className="dashboard-body">
            <div className="chart-section">
              <h2>Ticket Status Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ticketStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ticketStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <p className="total-text">Total Tickets: {totalTickets}</p>
            </div>

            <div className="table-section">
              <h2>Recent Tickets</h2>
              <table className="tickets-table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Date Raised</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.title}</td>
                      <td>
                        <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td>
                        <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td>{ticket.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;