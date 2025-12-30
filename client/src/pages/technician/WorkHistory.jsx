import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaStar, FaSearch, FaArrowLeft } from 'react-icons/fa';
import './WorkHistory.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const WorkHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Static resolved tickets data
  const resolvedTickets = [
    { id: 'TKT-001', subject: 'Printer not working - Room 204', user: 'John Doe', resolvedDate: '2025-12-20', resolutionTime: '2.5 hours', rating: 5, feedback: 'Quick and professional service!' },
    { id: 'TKT-002', subject: 'Software installation - Adobe Photoshop', user: 'Jane Smith', resolvedDate: '2025-12-19', resolutionTime: '4 hours', rating: 4, feedback: 'Good job, thanks!' },
    { id: 'TKT-004', subject: 'Password reset request', user: 'Sarah Williams', resolvedDate: '2025-12-17', resolutionTime: '30 minutes', rating: 5, feedback: 'Very fast response' },
    { id: 'TKT-007', subject: 'Laptop overheating', user: 'Mike Johnson', resolvedDate: '2025-12-15', resolutionTime: '3 hours', rating: 5, feedback: 'Fixed perfectly' },
    { id: 'TKT-008', subject: 'Email client not syncing', user: 'Lisa Davis', resolvedDate: '2025-12-12', resolutionTime: '1.5 hours', rating: 4, feedback: '' },
    { id: 'TKT-009', subject: 'Monitor color calibration', user: 'David Brown', resolvedDate: '2025-12-10', resolutionTime: '2 hours', rating: 5, feedback: 'Excellent work!' },
  ];

  // Calculate stats
  const totalResolved = resolvedTickets.length;
  const avgResolutionTime = (resolvedTickets.reduce((acc, t) => {
    const hours = parseFloat(t.resolutionTime);
    return acc + hours;
  }, 0) / totalResolved).toFixed(1);
  const avgRating = (resolvedTickets.reduce((acc, t) => acc + t.rating, 0) / totalResolved).toFixed(1);

  // Filter by search
  const filteredTickets = resolvedTickets.filter(ticket =>
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'filled' : 'empty'} />
    ));
  };

  return (
    <div className="user-layout">
      <TechnicianSidebar />

      <div className="main-content">
        <div className="top-header">
          <h2>Work History</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="work-history-container">
          <div className="work-history-card">
            {/* Header */}
            <div className="history-header">
              <h1>Resolved Tickets History</h1>
              <p>Track your performance and feedback</p>
            </div>

            {/* Performance Stats */}
            <div className="performance-stats">
              <div className="stat-item">
                <FaCheckCircle className="stat-icon" />
                <div>
                  <h3>{totalResolved}</h3>
                  <p>Total Resolved</p>
                </div>
              </div>
              <div className="stat-item">
                <FaClock className="stat-icon" />
                <div>
                  <h3>{avgResolutionTime} hrs</h3>
                  <p>Avg. Resolution Time</p>
                </div>
              </div>
              <div className="stat-item">
                <FaStar className="stat-icon" />
                <div>
                  <h3>{avgRating} ★</h3>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by ticket ID, subject or user..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Table */}
            <div className="history-table-wrapper">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Subject</th>
                    <th>User</th>
                    <th>Resolved Date</th>
                    <th>Resolution Time</th>
                    <th>Rating</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="ticket-id">{ticket.id}</td>
                      <td className="ticket-subject">{ticket.subject}</td>
                      <td>{ticket.user}</td>
                      <td>{ticket.resolvedDate}</td>
                      <td className="resolution-time">{ticket.resolutionTime}</td>
                      <td className="rating-stars">
                        {renderStars(ticket.rating)}
                      </td>
                      <td className="feedback">
                        {ticket.feedback || <em>No feedback</em>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="history-footer">
              <Link to="/technician/dashboard" className="back-btn">
                <FaArrowLeft /> Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;