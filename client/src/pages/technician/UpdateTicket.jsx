import React, { useState } from 'react';
import { FaArrowLeft, FaPaperclip, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import './UpdateTicket.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const UpdateTicket = () => {
  const [status, setStatus] = useState('In Progress');
  const [priority, setPriority] = useState('High');
  const [note, setNote] = useState('');

  const ticket = {
    id: 'TKT-001',
    subject: 'Printer not working in Room 204',
    user: 'John Doe',
    description: 'The printer in Room 204 is not responding. ',
    created: '2025-12-20',
  };

  const handleSubmit = () => {
    alert(`Ticket updated!\nStatus: ${status}\nPriority: ${priority}\nNote: ${note}`);
  };

  return (
    <div className="user-layout">
      <TechnicianSidebar />

      <div className="main-content">
        <div className="top-header">
          <h2>Update Ticket</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="update-ticket-container">
          <div className="update-ticket-card">
            <div className="update-header">
              <h1>{ticket.id} - {ticket.subject}</h1>
              <p>Reported by {ticket.user} on {ticket.created}</p>
            </div>

            <div className="ticket-info-section">
              <h3>Ticket Description</h3>
              <div className="description-box">
                <p>{ticket.description}</p>
              </div>
            </div>

            <div className="update-form-section">
              <h3>Update Ticket</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Priority</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Update Note</label>
                <textarea 
                  rows="6" 
                  placeholder="Add your update, resolution steps, or notes..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label>Attach Files (Optional)</label>
                <div className="file-upload-area">
                  <FaPaperclip className="upload-icon" />
                  <p>Drag & drop or <span className="browse-link">browse</span></p>
                  <input type="file" multiple className="file-input" />
                </div>
              </div>

              <div className="form-actions">
                <Link to="/technician/tickets" className="cancel-btn">
                  Cancel
                </Link>
                <button className="submit-btn" onClick={handleSubmit}>
                  <FaCheckCircle /> Submit Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTicket;