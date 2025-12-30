import React, { useState } from 'react';
import { FaEye, FaEdit, FaSearch,FaArrowLeft } from 'react-icons/fa';
import './AssignedTickets.css';
import { Link } from 'react-router-dom';
import TechnicianSidebar from '../../components/TechnicianSidebar';

const AssignedTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 6;

  // Static data for technician's assigned tickets
  const allTickets = [
    { id: 'TKT-001', subject: 'Printer not working in Room 204', user: 'John Doe', priority: 'High', status: 'In Progress', assigned: '2025-12-20' },
    { id: 'TKT-002', subject: 'Adobe Photoshop installation needed', user: 'Jane Smith', priority: 'Medium', status: 'In Progress', assigned: '2025-12-19' },
    { id: 'TKT-005', subject: 'Monitor display flickering', user: 'Mike Johnson', priority: 'Medium', status: 'Open', assigned: '2025-12-18' },
    { id: 'TKT-007', subject: 'Laptop overheating issue', user: 'Sarah Williams', priority: 'High', status: 'In Progress', assigned: '2025-12-17' },
    { id: 'TKT-010', subject: 'Network slow in Finance department', user: 'David Brown', priority: 'High', status: 'Open', assigned: '2025-12-16' },
    { id: 'TKT-011', subject: 'Microsoft Office activation', user: 'Lisa Davis', priority: 'Low', status: 'Open', assigned: '2025-12-15' },
    { id: 'TKT-012', subject: 'Email not syncing on phone', user: 'Robert Miller', priority: 'Medium', status: 'In Progress', assigned: '2025-12-14' },
  ];

  // Filtering
  const filteredTickets = allTickets.filter(ticket => {
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  // Pagination
  const indexOfLast = currentPage * ticketsPerPage;
  const indexOfFirst = indexOfLast - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  return (
    <div className="user-layout">
     <TechnicianSidebar />

      <div className="main-content">
        <div className="top-header">
          <h2>Assigned Tickets</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">T</div>
          </div>
        </div>

        <div className="assigned-container">
          <div className="assigned-card">
            <div className="assigned-header">
              <h1>My Assigned Tickets</h1>
              <p>View and update tickets assigned to you</p>
            </div>

            {/* Search & Filters */}
            <div className="search-filter-bar">
              <div className="search-input">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by ID, subject or user..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filters">
                <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                  <option value="All">All Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="All">All Status</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
            </div>

            {/* Table */}
            {currentTickets.length === 0 ? (
              <div className="empty-state">
                <p>No assigned tickets found.</p>
              </div>
            ) : (
              <>
                <div className="table-wrapper">
                  <table className="assigned-table">
                    <thead>
                      <tr>
                        <th>Ticket ID</th>
                        <th>Subject</th>
                        <th>User Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Assigned Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentTickets.map((ticket) => (
                        <tr key={ticket.id}>
                          <td className="ticket-id">{ticket.id}</td>
                          <td className="ticket-subject">{ticket.subject}</td>
                          <td>{ticket.user}</td>
                          <td>
                            <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td>
                            <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td>{ticket.assigned}</td>
                          <td className="action-buttons">
                            <button className="view-btn">
                              <Link to="/technician/ticket/TKT-001" className="view-btn">
                                  <FaEye /> View
                                </Link>
                            </button>
                            <button className="update-btn">
                              <Link to="/technician/update-ticket" className="update-btn">
                                 <FaEdit /> Update
                              </Link>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="pagination">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i}
                      className={currentPage === i + 1 ? 'active' : ''}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            <div className="assigned-footer">
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

export default AssignedTickets;