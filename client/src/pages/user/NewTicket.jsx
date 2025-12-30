import React, { useState } from 'react';
import { FaTicketAlt, FaArrowLeft, FaPaperclip, FaExclamationTriangle, FaClock, FaCheckCircle } from 'react-icons/fa';
import './NewTicket.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const NewTicket = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [priority, setPriority] = useState('medium');

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>Raise New Ticket</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="new-ticket-container">
          {/* Hero Header */}
          <div className="ticket-hero">
            <FaTicketAlt className="ticket-hero-icon" />
            <div className="hero-content">
              <h1>Submit a Support Request</h1>
              <p>Our team will get back to you as soon as possible</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <span className="step-number">1</span>
                <span className="step-label">Ticket Details</span>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <span className="step-number">2</span>
                <span className="step-label">Description</span>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <span className="step-number">3</span>
                <span className="step-label">Attachments</span>
              </div>
            </div>
            <div className="progress-line" style={{ width: `${(currentStep - 1) * 50}%` }}></div>
          </div>

          {/* Form Card */}
          <div className="enhanced-ticket-card">
            <form className="enhanced-ticket-form">
              {/* Step 1: Ticket Details */}
              <div className={`form-section ${currentStep === 1 ? 'active' : ''}`}>
                <h3>Ticket Information</h3>

                <div className="form-group">
                  <label>Ticket Title *</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Unable to connect to printer" 
                    required 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Category *</label>
                    <select required>
                      <option value="">Select category</option>
                      <option>Hardware Issue</option>
                      <option>Software Problem</option>
                      <option>Network/Internet</option>
                      <option>Account/Login</option>
                      <option>Printer/Scanner</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Priority Level *</label>
                    <div className="priority-selector">
                      <div 
                        className={`priority-option low ${priority === 'low' ? 'selected' : ''}`}
                        onClick={() => setPriority('low')}
                      >
                        <FaClock className="priority-icon" />
                        <span>Low</span>
                      </div>
                      <div 
                        className={`priority-option medium ${priority === 'medium' ? 'selected' : ''}`}
                        onClick={() => setPriority('medium')}
                      >
                        <FaExclamationTriangle className="priority-icon" />
                        <span>Medium</span>
                      </div>
                      <div 
                        className={`priority-option high ${priority === 'high' ? 'selected' : ''}`}
                        onClick={() => setPriority('high')}
                      >
                        <FaExclamationTriangle className="priority-icon high" />
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Description */}
              <div className={`form-section ${currentStep === 2 ? 'active' : ''}`}>
                <h3>Describe Your Issue</h3>
                <div className="form-group">
                  <label>Detailed Description *</label>
                  <textarea 
                    rows="8" 
                    placeholder="Please provide as much detail as possible... Include what happened, when it started, any error messages, and steps you've already tried."
                    required 
                  ></textarea>
                </div>
              </div>

              {/* Step 3: Attachments */}
              <div className={`form-section ${currentStep === 3 ? 'active' : ''}`}>
                <h3>Attachments (Optional)</h3>
                <div className="file-upload-area">
                  <FaPaperclip className="upload-icon" />
                  <p>Drag & drop files here or <span className="browse-link">browse</span></p>
                  <small>Supported: Images, PDFs, Documents (Max 10MB each)</small>
                  <input type="file" multiple accept="image/*,.pdf,.doc,.docx" className="file-input" />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button type="button" className="prev-btn" onClick={() => setCurrentStep(currentStep - 1)}>
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button type="button" className="next-btn" onClick={() => setCurrentStep(currentStep + 1)}>
                    Next
                  </button>
                ) : (
                  <div className="submit-group">
                    <Link to="/user/dashboard" className="cancel-btn">
                      Cancel
                    </Link>
                    <button type="submit" className="submit-ticket-btn">
                      <FaCheckCircle /> Submit Ticket
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;