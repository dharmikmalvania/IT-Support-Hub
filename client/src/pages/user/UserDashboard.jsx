import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTicketAlt, FaSpinner, FaCheck, FaTimes, FaSearch, FaBell, FaQuestionCircle, FaUserCircle, FaEye, FaHistory, FaClipboardList } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';  // All recharts imports
import './UserDashboard.css';
import Sidebar from '../../components/Sidebar';

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Stat data for cards
  const stats = {
    totalTickets: 45,
    resolved: 12,
    pending: 33,
    messages: 5,
  };

  // Donut Chart Data (Ticket Status)
  const donutData = [
    { name: 'Open', value: 8, fill: '#3b82f6' },
    { name: 'In Progress', value: 5, fill: '#f59e0b' },
    { name: 'Resolved', value: 12, fill: '#10b981' },
    { name: 'Closed', value: 20, fill: '#ef4444' },
  ];

  // Bar Chart Data (Priority-wise Tickets)
  const barData = [
    { name: 'High', value: 15 },
    { name: 'Medium', value: 20 },
    { name: 'Low', value: 10 },
  ];

  const recentTickets = [
    { id: 'TKT-001', subject: 'Printer not working in Room 204', status: 'Open', priority: 'High' },
    { id: 'TKT-002', subject: 'Software installation needed', status: 'In Progress', priority: 'Medium' },
    { id: 'TKT-003', subject: 'Password reset request', status: 'Resolved', priority: 'Low' },
    { id: 'TKT-004', subject: 'Network connectivity issue', status: 'Open', priority: 'High' },
    { id: 'TKT-005', subject: 'Laptop screen flickering', status: 'In Progress', priority: 'Medium' },
  ];

  const notifications = [
    { id: 1, message: 'New ticket TKT-001 assigned to technician', time: '2 mins ago', unread: true },
    { id: 2, message: 'Ticket TKT-002 moved to In Progress', time: '1 hour ago', unread: false },
    { id: 3, message: 'Ticket TKT-003 resolved – feedback requested', time: '3 hours ago', unread: true },
  ];

  const filteredTickets = recentTickets.filter(ticket =>
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Welcome / Quick Actions */}
<div className="welcome-section">
  <div className="welcome-left">
    <div className="user-avatar">
      <FaUserCircle className="avatar-icon" />
    </div>
    <div className="welcome-text">
      <h1>Welcome Back, User!</h1>
      <p>Here's a quick overview of your support activity</p>
    </div>
  </div>
  <div className="quick-actions">
    <NavLink to="/user/new-ticket" className="raise-btn">
      <FaTicketAlt /> Raise New Ticket
    </NavLink>
    <NavLink to="/user/tickets" className="view-btn">
      <FaClipboardList /> View My Tickets
    </NavLink>
    <NavLink to="/user/history" className="history-btn">
      <FaHistory /> Ticket History
    </NavLink>
  </div>
</div>

        <div className="dashboard-grid">
          {/* Stat Cards – Your Grid Structure (Plain Divs, No shadcn) */}
         {/* Stat Cards – Colorful Grid Matching Image */}
<div className="stats-section">
  <div className="grid grid-cols-4 gap-6">
    {[
      { label: 'Total Tickets', value: '514', icon: FaTicketAlt, bgColor: '#10b981' },
      { label: 'Resolved', value: '61.50', icon: FaCheck, bgColor: '#ec4899' },
      { label: 'Pending', value: '0850', icon: FaSpinner, bgColor: '#8b5cf6' },
      { label: 'Messages', value: '0312', icon: FaBell, bgColor: '#f59e0b' },
    ].map((item, i) => (
      <div key={i} className="stat-card" style={{ backgroundColor: item.bgColor }}>
        <div className="stat-card-content">
          <div className="stat-icon-wrapper" style={{ color: item.bgColor }}>
            <item.icon />
          </div>
          <p className="text-sm text-gray-400">{item.label}</p>
          <h2 className="text-3xl font-bold text-white">{item.value}</h2>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Charts Section – Donut (Ticket Status) & Bar (Priority-wise) */}
          <div className="charts-section">
            {/* 1. Donut Chart – Ticket Status */}
            <div className="chart-card">
              <h2>Ticket Status</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={donutData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50}>
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} tickets`, 'Status']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 2. Bar Chart – Priority-wise Tickets */}
            <div className="bar-chart-card">
              <h2>Priority-wise Tickets</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 4. Recent Tickets Table */}
          <div className="recent-tickets-section">
            <h2>Recent Tickets</h2>
            <div className="tickets-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTickets.map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.id}</td>
                      <td>{ticket.subject}</td>
                      <td>
                        <span className={`status-badge ${ticket.status.toLowerCase()}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td>
                        <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td>
                        <NavLink to={`/user/ticket/${ticket.id}`} className="view-btn-small">
                          <FaEye /> View
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Notifications */}
          <div className="notifications-section">
            <h2>Notifications</h2>
            <div className="notifications-list">
              {notifications.map((notif, index) => (
                <div key={index} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                  <FaBell className="notif-icon" />
                  <div className="notif-content">
                    <p className="notif-message">{notif.message}</p>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                  {notif.unread && <div className="unread-dot"></div>}
                </div>
              ))}
              <NavLink to="/user/notifications" className="view-all-btn">
                View all notifications
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;