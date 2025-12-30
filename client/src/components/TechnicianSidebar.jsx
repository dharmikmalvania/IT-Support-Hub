import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaTicketAlt, 
  FaHistory, 
  FaTools, 
  FaUserCircle,
  FaBell,
  FaSignOutAlt 
} from 'react-icons/fa';
import './TechnicianSidebar.css'; // We'll create this

const TechnicianSidebar = () => {
  return (
    <div className="sidebar technician-sidebar">
      <div className="sidebar-header">
        <h2>IT Support Hub</h2>
        <span className="role-badge">Technician</span>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink 
              to="/technician/dashboard" 
              className={({ isActive }) => 
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaHome className="menu-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/technician/tickets" 
              className={({ isActive }) => 
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaTicketAlt className="menu-icon" />
              <span>Assigned Tickets</span>
            </NavLink>
          </li>


          <li>
  <NavLink 
    to="/technician/history" 
    className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
  >
    <FaHistory className="menu-icon" />
    <span>Work History</span>
  </NavLink>
</li>
          <li>
  <NavLink 
    to="/technician/notifications" 
    className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
  >
    <FaBell className="menu-icon" />
    <span>Notifications</span>
  </NavLink>
</li>
          <li>
  <NavLink 
    to="/technician/profile" 
    className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
  >
    <FaUserCircle className="menu-icon" />
    <span>Profile</span>
  </NavLink>
</li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/logout" className="menu-item logout">
          <FaSignOutAlt className="menu-icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default TechnicianSidebar;