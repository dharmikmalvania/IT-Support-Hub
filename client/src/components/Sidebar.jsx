import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaTicketAlt, 
  FaHistory, 
  FaBell, 
  FaClipboardList,
  FaQuestionCircle, 
  FaSignOutAlt
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="final-sidebar">
      {/* Glass Rectangle with Icons */}
      <div className="glass-rectangle">
        <div className="icons-container">
          <NavLink to="/user/dashboard" className="icon-item" data-tooltip="Dashboard">
            <FaHome className="sidebar-icon" />
          </NavLink>
          <NavLink to="/user/tickets" className="icon-item" data-tooltip="My Tickets">
             <FaClipboardList className="sidebar-icon" />  {/* ← Changed icon */}
          </NavLink>
          <NavLink to="/user/new-ticket" className="icon-item" data-tooltip="Raise New Ticket">
            <FaTicketAlt className="sidebar-icon" />
          </NavLink>
          <NavLink to="/user/history" className="icon-item" data-tooltip="Ticket History">
            <FaHistory className="sidebar-icon" />
          </NavLink>
          <NavLink to="/user/notifications" className="icon-item" data-tooltip="Notifications">
            <FaBell className="sidebar-icon" />
          </NavLink>
          <NavLink to="/user/help" className="icon-item" data-tooltip="Help & FAQ">
            <FaQuestionCircle className="sidebar-icon" />
          </NavLink>
        </div>

        {/* Bottom: Profile Pic + Logout */}
        <div className="bottom-icons">
          {/* Profile Pic as Button */}
            <NavLink to="/user/profile" className="profile-avatar" data-tooltip="My Profile">           
             <img 
              src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" 
              alt="Profile" 
              className="profile-pic" 
            />
          </NavLink>

          {/* Logout */}
          <button className="icon-item logout-btn" data-tooltip="Logout">
            <FaSignOutAlt className="sidebar-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;