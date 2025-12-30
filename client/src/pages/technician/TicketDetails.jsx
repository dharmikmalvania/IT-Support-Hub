import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaCalendarAlt, FaTicketAlt, FaExclamationTriangle, FaClock, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import './TicketDetails.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const TicketDetails = () => {
  // Static ticket data
  const ticket = {
    id: 'TKT-001',
    subject: 'Printer not working in Room 204',
    description: 'The printer in Room 204 is not responding. I have tried restarting it multiple times and checking all cables, but it still shows "Offline". This is affecting the entire finance team as we cannot print reports. Model: HP LaserJet Pro M404n.',
    user: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Finance',
    category: 'Hardware Issue',
    priority: 'High',
    status: 'In Progress',
    created: '2025-12-20 10:30 AM',
    assigned: '2025-12-20 11:15 AM'
  };

  const [newStatus, setNewStatus] = useState(ticket.status);
  const [resolutionNote, setResolutionNote] = useState('');

  const handleUpdate = () => {
    if (resolutionNote.trim()) {
      alert(`Ticket ${ticket.id} updated to "${newStatus}"!\nNote: ${resolutionNote}`);
      setResolutionNote('');
    } else {
      alert('Please add a resolution note.');
    }
  };

  return (
    <div className="user-layout">
      <TechnicianSidebar />   {/* Active highlight works because of NavLink in sidebar */}

      <div className="main-content">
        <div className="top-header">
          <h2>Ticket Details</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="ticket-details-container">
          <div className="ticket-details-card">
            {/* Ticket Header */}
            <div className="ticket-header">
              <div className="header-left">
                <h1>{ticket.id}</h1>
                <h2>{ticket.subject}</h2>
                <div className="header-badges">
                  <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                  <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority} Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Info Sections */}
            <div className="details-grid">
              <div className="details-card">
                <h3>Ticket Information</h3>
                <div className="info-row">
                  <FaTicketAlt className="icon" />
                  <div>
                    <strong>Category</strong>
                    <p>{ticket.category}</p>
                  </div>
                </div>
                <div className="info-row">
                  <FaCalendarAlt className="icon" />
                  <div>
                    <strong>Created</strong>
                    <p>{ticket.created}</p>
                  </div>
                </div>
                <div className="info-row">
                  <FaCalendarAlt className="icon" />
                  <div>
                    <strong>Assigned</strong>
                    <p>{ticket.assigned}</p>
                  </div>
                </div>
              </div>

              <div className="details-card">
                <h3>Reported By</h3>
                <div className="info-row">
                  <FaUser className="icon" />
                  <div>
                    <strong>Name</strong>
                    <p>{ticket.user}</p>
                  </div>
                </div>
                <div className="info-row">
                  <FaEnvelope className="icon" />
                  <div>
                    <strong>Email</strong>
                    <p>{ticket.email}</p>
                  </div>
                </div>
                <div className="info-row">
                  <FaBuilding className="icon" />
                  <div>
                    <strong>Department</strong>
                    <p>{ticket.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="description-card">
              <h3>Issue Description</h3>
              <div className="description-content">
                <p>{ticket.description}</p>
              </div>
            </div>

            {/* Update Form */}
            <div className="update-card">
              <h3>Update Ticket Status</h3>
              <div className="update-form">
                <div className="form-group">
                  <label>New Status</label>
                  <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Resolution Note</label>
                  <textarea 
                    rows="6"
                    placeholder="Describe what you did to resolve this issue..."
                    value={resolutionNote}
                    onChange={(e) => setResolutionNote(e.target.value)}
                  ></textarea>
                </div>

                <button className="submit-btn" onClick={handleUpdate}>
                  <FaCheckCircle /> Submit Update
                </button>
              </div>
            </div>
          </div>

          <div className="details-footer">
            <Link to="/technician/tickets" className="back-btn">
              <FaArrowLeft /> Back to Assigned Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;