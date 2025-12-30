import React, { useState } from 'react';
import { FaBell, FaTicketAlt, FaExclamationTriangle, FaCheck, FaTrash, FaArrowLeft } from 'react-icons/fa';
import './TechnicianNotifications.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const TechnicianNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New ticket assigned', message: 'TKT-001: Printer not working in Room 204 (High Priority)', time: '10 minutes ago', read: false, type: 'assignment' },
    { id: 2, title: 'High priority ticket updated', message: 'TKT-007: Laptop overheating - User added more details', time: '1 hour ago', read: false, type: 'update' },
    { id: 3, title: 'Ticket resolved', message: 'TKT-004: Password reset completed and closed', time: '3 hours ago', read: true, type: 'success' },
    { id: 4, title: 'New ticket assigned', message: 'TKT-010: Network slow in Finance department', time: 'Yesterday', read: true, type: 'assignment' },
    { id: 5, title: 'System alert', message: 'Scheduled maintenance tomorrow at 2 AM', time: '2 days ago', read: true, type: 'info' },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const markRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="user-layout">
      <TechnicianSidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>Notifications</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="notification-bell">
              <FaBell />
              {unreadCount > 0 && <span className="bell-badge">{unreadCount}</span>}
            </div>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="notifications-container">
          <div className="notifications-card">
            <div className="notifications-header">
              <h1>Your Notifications</h1>
              <div className="header-actions">
                {unreadCount > 0 && (
                  <button className="mark-read-btn" onClick={markAllRead}>
                    <FaCheck /> Mark all as read
                  </button>
                )}
                {notifications.length > 0 && (
                  <button className="clear-btn" onClick={clearAll}>
                    <FaTrash /> Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Notification List */}
            {notifications.length === 0 ? (
              <div className="empty-notifications">
                <FaBell className="empty-bell" />
                <h3>No notifications yet</h3>
                <p>You'll be notified when new tickets are assigned or updated.</p>
              </div>
            ) : (
              <div className="notifications-list">
                {notifications.map(notif => (
                  <div key={notif.id} className={`notification-item ${notif.read ? 'read' : 'unread'}`}>
                    <div className="notif-icon">
                      {notif.type === 'assignment' && <FaTicketAlt className="icon-assignment" />}
                      {notif.type === 'update' && <FaExclamationTriangle className="icon-update" />}
                      {notif.type === 'success' && <FaCheck className="icon-success" />}
                      {notif.type === 'info' && <FaBell className="icon-info" />}
                    </div>
                    <div className="notif-content">
                      <h4>{notif.title}</h4>
                      <p>{notif.message}</p>
                      <span className="notif-time">{notif.time}</span>
                    </div>
                    {!notif.read && (
                      <button className="mark-single-read" onClick={() => markRead(notif.id)}>
                        Mark as read
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="notifications-footer">
            <Link to="/technician/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianNotifications;