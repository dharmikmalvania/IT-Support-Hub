import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaBuilding, 
  FaPhone, 
  FaIdBadge, 
  FaCalendarAlt, 
  FaLock, 
  FaBell, 
  FaEdit, 
  FaArrowLeft 
} from 'react-icons/fa';
import './Profile.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>My Profile</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="profile-container">
          {/* Hero Header */}
          <div className="profile-hero">
            <div className="hero-avatar">
              <FaUser className="hero-avatar-icon" />
            </div>
            <div className="hero-info">
              <h1>Dharmik Malvaniya</h1>
              <p>Standard User • BCA Student</p>
              <p className="hero-email">dharmik.malvaniya@example.com</p>
            </div>
            <button className="edit-main-btn">
              <FaEdit /> Edit Profile
            </button>
          </div>

          {/* Tabs */}
          <div className="profile-tabs">
            <button 
              className={activeTab === 'personal' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('personal')}
            >
              Personal Info
            </button>
            <button 
              className={activeTab === 'account' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('account')}
            >
              Account Info
            </button>
            <button 
              className={activeTab === 'security' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
            <button 
              className={activeTab === 'preferences' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('preferences')}
            >
              Preferences
            </button>
          </div>

          <div className="profile-content">
            {activeTab === 'personal' && (
              <div className="profile-section">
                <div className="section-header">
                  <h3>Personal Information</h3>
                  <button className="edit-section-btn"><FaEdit /> Edit</button>
                </div>
                <div className="info-grid">
                  <div className="info-card">
                    <FaUser className="card-icon" />
                    <div>
                      <strong>Full Name</strong>
                      <p>Dharmik Malvaniya</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaEnvelope className="card-icon" />
                    <div>
                      <strong>Email</strong>
                      <p>dharmik.malvaniya@example.com</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaBuilding className="card-icon" />
                    <div>
                      <strong>Department</strong>
                      <p>Bachelor of Computer Applications (BCA)</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaPhone className="card-icon" />
                    <div>
                      <strong>Phone Number</strong>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="profile-section">
                <div className="section-header">
                  <h3>Account Information</h3>
                </div>
                <div className="info-grid">
                  <div className="info-card">
                    <FaIdBadge className="card-icon" />
                    <div>
                      <strong>User ID</strong>
                      <p>USR-BCA-2025-001</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaUser className="card-icon" />
                    <div>
                      <strong>Role</strong>
                      <p>Standard User</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaCalendarAlt className="card-icon" />
                    <div>
                      <strong>Account Created</strong>
                      <p>January 15, 2025</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaLock className="card-icon" />
                    <div>
                      <strong>Last Login</strong>
                      <p>December 24, 2025 - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="profile-section">
                <div className="section-header">
                  <h3>Security Settings</h3>
                </div>
                <div className="security-list">
                  <div className="security-item">
                    <div>
                      <strong>Change Password</strong>
                      <p>Keep your account secure with a strong password</p>
                    </div>
                    <button className="action-btn">Change</button>
                  </div>
                  <div className="security-item">
                    <div>
                      <strong>Two-Factor Authentication</strong>
                      <p>Add an extra layer of security</p>
                    </div>
                    <button className="action-btn secondary">Enable</button>
                  </div>
                  <div className="security-item">
                    <div>
                      <strong>Login History</strong>
                      <p>View recent login activity</p>
                    </div>
                    <button className="action-btn">View</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="profile-section">
                <div className="section-header">
                  <h3>Notification Preferences</h3>
                </div>
                <div className="preferences-list">
                  <label className="preference-item">
                    <input type="checkbox" defaultChecked />
                    <span>Email notifications for new ticket replies</span>
                  </label>
                  <label className="preference-item">
                    <input type="checkbox" defaultChecked />
                    <span>Email when ticket status changes</span>
                  </label>
                  <label className="preference-item">
                    <input type="checkbox" />
                    <span>Weekly summary email</span>
                  </label>
                  <label className="preference-item">
                    <input type="checkbox" defaultChecked />
                    <span>Notify when ticket is assigned to technician</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="profile-footer">
            <Link to="/user/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;