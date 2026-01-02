import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTicketAlt, FaSpinner, FaCheck, FaTimes, FaSearch, FaBell, FaQuestionCircle, FaUserCircle, FaEye, FaHistory, FaClipboardList } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';import './UserDashboard.css';
import Sidebar from '../../components/Sidebar';

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);  // For count-up animation in center

  useEffect(() => {
    const timer = setInterval(() => setCount((prev) => {
      if (prev < 45) return prev + 1;
      clearInterval(timer);
      return 45;
    }), 50);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { title: 'Open Tickets', value: '8', subtitle: 'Last Week-10', icon: FaTicketAlt, color: '#3b82f6', bgImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=entropy' },
    { title: 'In Progress', value: '5', subtitle: 'Last Week-7', icon: FaSpinner, color: '#f59e0b', bgImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=entropy' },
    { title: 'Resolved', value: '12', subtitle: 'Last Week-15', icon: FaCheck, color: '#10b981', bgImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=entropy' },
    { title: 'Closed', value: '20', subtitle: 'Last Week-25', icon: FaTimes, color: '#ef4444', bgImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=entropy' },
  ];

  const chartData = [
    { name: 'Open', value: 8, fill: 'url(#openGradient)' },
    { name: 'In Progress', value: 5, fill: 'url(#progressGradient)' },
    { name: 'Resolved', value: 12, fill: 'url(#resolvedGradient)' },
    { name: 'Closed', value: 20, fill: 'url(#closedGradient)' },
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
              <FaUserCircle />
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
          {/* Summary Cards – Enhanced Uiverse Style */}
          <div className="stats-section">
            {stats.map((stat, index) => (
              <div key={index} className="card work" style={{ '--play': stat.color, backgroundImage: stat.bgImg }}>
                <div className="img-section">
                  <stat.icon className="stat-icon-svg" style={{ color: 'white' }} />
                </div>
                <div className="card-desc">
                  <div className="card-header">
                    <div className="card-title">{stat.title}</div>
                    <div className="card-menu">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="card-time">{stat.value}</div>
                  <p className="recent">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Status Chart & Recent Tickets */}
          <div className="chart-section">
            <div className="chart-card">
              <h2>Ticket Status Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <defs>
                    <linearGradient id="openGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="resolvedGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="closedGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                  <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} tickets`, 'Status']} />
                </PieChart>
                <div className="chart-center">
                  <h3>Total Tickets</h3>
                  <p>{count}</p>
                </div>
              </ResponsiveContainer>
            </div>

            <div className="recent-tickets-card">
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
          </div>j

          {/* Notifications */}
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