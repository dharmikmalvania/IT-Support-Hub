import React from 'react';
import { FaEye, FaArrowLeft } from 'react-icons/fa';
import './MyTickets.css'; // We'll create this next
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const MyTickets = () => {
  // Static ticket data (same as before + more for list)
  const myTickets = [
    { id: 'TKT-001', title: 'Printer not working in Room 204', status: 'Open', priority: 'High', date: '2025-12-20' },
    { id: 'TKT-002', title: 'Software installation required - Adobe Photoshop', status: 'In Progress', priority: 'Medium', date: '2025-12-19' },
    { id: 'TKT-003', title: 'Network connectivity issue - Slow internet', status: 'Resolved', priority: 'High', date: '2025-12-18' },
    { id: 'TKT-004', title: 'Password reset request', status: 'Closed', priority: 'Low', date: '2025-12-17' },
    { id: 'TKT-005', title: 'Monitor display flickering', status: 'Open', priority: 'Medium', date: '2025-12-16' },
    { id: 'TKT-006', title: 'Microsoft Office license activation', status: 'In Progress', priority: 'Low', date: '2025-12-15' },
    { id: 'TKT-007', title: 'Laptop overheating', status: 'Resolved', priority: 'High', date: '2025-12-14' },
  ];

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>My Tickets</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="my-tickets-container">
          <div className="tickets-card">
            <div className="tickets-header">
              <h1>My Support Tickets</h1>
              <p>View and track all your submitted tickets</p>
            </div>

            <div className="tickets-table-wrapper">
              <table className="tickets-table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="ticket-id">{ticket.id}</td>
                      <td className="ticket-title">{ticket.title}</td>
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
                      <td>
                        <button className="view-btn">
                          <FaEye /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="tickets-footer">
              <Link to="/user/dashboard" className="back-btn">
                <FaArrowLeft /> Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;