import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaIdBadge,FaArrowLeft, FaBuilding, FaTools, FaLaptopCode, FaNetworkWired, FaCheckCircle, FaClock, FaStar, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import './TechnicianProfile.css';
import TechnicianSidebar from '../../components/TechnicianSidebar';
import { Link } from 'react-router-dom';

const TechnicianProfile = () => {
  const [availability, setAvailability] = useState('available');

  const technician = {
    name: 'Alex Rivera',
    email: 'alex.rivera@company.com',
    role: 'Senior Technician',
    department: 'IT Support Team',
    phone: '+91 87654 32109',
    ticketsResolved: 156,
    avgResolutionTime: '2.4 hours',
    rating: 4.8
  };

  const skills = [
    { name: 'Hardware Repair', level: 95, icon: FaTools },
    { name: 'Software Troubleshooting', level: 90, icon: FaLaptopCode },
    { name: 'Network Configuration', level: 85, icon: FaNetworkWired }
  ];

  return (
    <div className="user-layout">
      <TechnicianSidebar />

      <div className="main-content">
        <div className="top-header">
          <h2>My Profile</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="tech-profile-container">
          {/* Hero Header */}
          <div className="tech-profile-hero">
            <div className="hero-avatar">
              <FaUser className="hero-avatar-icon" />
            </div>
            <div className="hero-info">
              <h1>{technician.name}</h1>
              <p className="role">{technician.role}</p>
              <div className="availability-status">
  <div className="status-info">
    <span className={`status-dot ${availability}`}></span>
    <span className="status-text">
      {availability === 'available' ? 'Available' : 
       availability === 'busy' ? 'Busy' : 
       'Offline'}
    </span>
  </div>

  <button 
    className="status-toggle-btn"
    onClick={() => setAvailability(
      availability === 'available' ? 'busy' : 
      availability === 'busy' ? 'offline' : 'available'
    )}
  >
    Change
  </button>
</div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="tech-stats-grid">
            <div className="stat-card">
              <FaCheckCircle className="stat-icon resolved" />
              <div className="stat-info">
                <h3>{technician.ticketsResolved}</h3>
                <p>Tickets Resolved</p>
              </div>
            </div>
            <div className="stat-card">
              <FaClock className="stat-icon time" />
              <div className="stat-info">
                <h3>{technician.avgResolutionTime}</h3>
                <p>Avg. Resolution Time</p>
              </div>
            </div>
            <div className="stat-card">
              <FaStar className="stat-icon rating" />
              <div className="stat-info">
                <h3>{technician.rating} ★</h3>
                <p>Technician Rating</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="tech-details-grid">
            <div className="details-card">
              <h3>Personal Information</h3>
              <div className="info-row">
                <FaUser className="icon" />
                <div>
                  <strong>Name</strong>
                  <p>{technician.name}</p>
                </div>
              </div>
              <div className="info-row">
                <FaEnvelope className="icon" />
                <div>
                  <strong>Email</strong>
                  <p>{technician.email}</p>
                </div>
              </div>
              <div className="info-row">
                <FaPhone className="icon" />
                <div>
                  <strong>Phone</strong>
                  <p>{technician.phone}</p>
                </div>
              </div>
              <div className="info-row">
                <FaBuilding className="icon" />
                <div>
                  <strong>Department</strong>
                  <p>{technician.department}</p>
                </div>
              </div>
              <div className="info-row">
                <FaIdBadge className="icon" />
                <div>
                  <strong>Role</strong>
                  <p>{technician.role}</p>
                </div>
              </div>
            </div>

            <div className="details-card">
              <h3>Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <skill.icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-footer">
            <Link to="/technician/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianProfile;