import React, { useState } from 'react';
import { FaEye, FaArrowLeft, FaSearch, FaFileExport } from 'react-icons/fa';
import './TicketHistory.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const TicketHistory = () => {
  const allTickets = [
    { id: 'TKT-003', title: 'Network connectivity issue - Slow internet', status: 'Resolved', priority: 'High', created: '2025-12-18', resolved: '2025-12-20' },
    { id: 'TKT-004', title: 'Password reset request', status: 'Closed', priority: 'Low', created: '2025-12-17', resolved: '2025-12-18' },
    { id: 'TKT-007', title: 'Laptop overheating', status: 'Resolved', priority: 'High', created: '2025-12-14', resolved: '2025-12-16' },
    { id: 'TKT-008', title: 'Email client not syncing', status: 'Closed', priority: 'Medium', created: '2025-12-10', resolved: '2025-12-12' },
    { id: 'TKT-009', title: 'Monitor color calibration', status: 'Resolved', priority: 'Low', created: '2025-12-05', resolved: '2025-12-07' },
    { id: 'TKT-010', title: 'Printer paper jam recurring', status: 'Closed', priority: 'Medium', created: '2025-12-02', resolved: '2025-12-04' },
  ];

  // State for filters, search, pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  // Filtered tickets
  const filteredTickets = allTickets.filter(ticket => {
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Pagination logic
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const handleExport = () => {
    alert('Export to CSV feature coming soon! (Static demo)');
  };

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        <div className="top-header">
          <h2>Ticket History</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="history-container">
          {/* Page Header + Export */}
          <div className="page-header">
            <h1>Your Ticket History</h1>
            <button className="export-btn" onClick={handleExport}>
              <FaFileExport /> Export to CSV
            </button>
          </div>

          {/* Filter & Search Bar */}
          <div className="filter-search-bar">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by Ticket ID or Title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filters">
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All Status</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
              <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                <option value="All">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Table or Empty State */}
          {currentTickets.length === 0 ? (
            <div className="empty-state">
              <div className="empty-illustration">📭</div>
              <h3>No Ticket History Found</h3>
              <p>Try adjusting your filters or search term.</p>
            </div>
          ) : (
            <>
              <div className="table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Created</th>
                      <th>Resolved On</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTickets.map((ticket) => (
                      <tr key={ticket.id}>
                        <td className="ticket-id">{ticket.id}</td>
                        <td className="ticket-title">{ticket.title}</td>
                        <td><span className={`status-badge ${ticket.status.toLowerCase()}`}>{ticket.status}</span></td>
                        <td><span className={`priority-badge ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span></td>
                        <td>{ticket.created}</td>
                        <td>{ticket.resolved}</td>
                        <td>
                          <button className="view-btn">
                            <FaEye /> View Details
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

          <div className="history-footer">
            <Link to="/user/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketHistory;