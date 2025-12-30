import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaMobileAlt, FaVolumeUp, FaCheck, FaTrash, FaArrowLeft } from 'react-icons/fa';
import './Notifications.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Your ticket TKT-003 has been resolved', message: 'Technician has fixed the network issue.', time: '2 hours ago', read: false, type: 'success' },
    { id: 2, title: 'New reply on ticket TKT-002', message: 'Technician asked for more details about the software.', time: '5 hours ago', read: false, type: 'info' },
    { id: 3, title: 'Ticket TKT-004 closed', message: 'Password reset completed successfully.', time: '1 day ago', read: true, type: 'success' },
    { id: 4, title: 'Ticket TKT-001 assigned', message: 'Your printer issue has been assigned to a technician.', time: '2 days ago', read: true, type: 'warning' },
    { id: 5, title: 'System maintenance scheduled', message: 'IT Support Hub will be under maintenance on Dec 28.', time: '3 days ago', read: true, type: 'info' },
  ]);

  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

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
      <Sidebar />

      <div className="main-content">
        {/* Top Header with Bell Icon */}
        <div className="top-header">
          <h2>Notifications</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="notification-bell">
              <FaBell />
              {unreadCount > 0 && <span className="bell-badge">{unreadCount}</span>}
            </div>
            <div className="avatar">D</div>
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
                <p>We'll let you know when something important happens.</p>
              </div>
            ) : (
              <div className="notifications-list">
                {notifications.map(notif => (
                  <div key={notif.id} className={`notification-item ${notif.read ? 'read' : 'unread'}`}>
                    <div className="notif-icon">
                      {notif.type === 'success' && <FaCheck className="icon-success" />}
                      {notif.type === 'info' && <FaEnvelope className="icon-info" />}
                      {notif.type === 'warning' && <FaVolumeUp className="icon-warning" />}
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

            {/* Notification Settings */}
            <div className="settings-section">
              <h3>Notification Preferences</h3>
              <div className="settings-list">
                <label className="setting-item">
                  <div>
                    <strong><FaEnvelope /> Email Notifications</strong>
                    <p>Receive updates via email</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={emailNotif} 
                    onChange={() => setEmailNotif(!emailNotif)} 
                  />
                </label>
                <label className="setting-item">
                  <div>
                    <strong><FaBell /> Push Notifications</strong>
                    <p>Get instant alerts in browser</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={pushNotif} 
                    onChange={() => setPushNotif(!pushNotif)} 
                  />
                </label>
                <label className="setting-item">
                  <div>
                    <strong><FaMobileAlt /> SMS Notifications</strong>
                    <p>Get alerts via text message (premium)</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={smsNotif} 
                    onChange={() => setSmsNotif(!smsNotif)} 
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="notifications-footer">
            <Link to="/user/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;