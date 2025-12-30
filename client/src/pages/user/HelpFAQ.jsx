import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaEnvelope, FaPhone, FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './HelpFAQ.css';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const HelpFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I raise a new support ticket?",
      answer: "Click on 'Raise New Ticket' from the sidebar or dashboard. Fill in the title, category, priority, and description. You can also attach files. Click 'Submit Ticket' when done."
    },
    {
      question: "How can I track the status of my ticket?",
      answer: "Go to 'My Tickets' page to see all your active tickets with current status. For resolved tickets, check 'Ticket History'."
    },
    {
      question: "What priority levels are available?",
      answer: "We have three priority levels: Low (routine issues), Medium (affects work), High (critical - system down or major disruption)."
    },
    {
      question: "Can I attach files to my ticket?",
      answer: "Yes! In the 'Raise New Ticket' form, there's an attachment section where you can upload images, PDFs, or documents (max 10MB)."
    },
    {
      question: "How will I be notified about updates?",
      answer: "You'll receive email notifications by default. You can also enable push notifications in your Profile > Preferences section."
    },
    {
      question: "Who can I contact for urgent issues?",
      answer: "For critical issues, mark your ticket as 'High' priority. You can also call our emergency support line at +91-98765-43210 (available 24/7)."
    },
    {
      question: "How long does it take to resolve tickets?",
      answer: "Response times: High priority - within 1 hour, Medium - within 4 hours, Low - within 24 hours. Resolution time varies by issue complexity."
    },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h2>Help & FAQ</h2>
          <div className="user-info">
            <span>Welcome back!</span>
            <div className="avatar">D</div>
          </div>
        </div>

        <div className="help-container">
          <div className="help-card">
            {/* Header */}
            <div className="help-header">
              <div className="header-content">
                <FaQuestionCircle className="help-icon" />
                <h1>Help Center & FAQ</h1>
                <p>Find answers to common questions or get in touch with our support team</p>
              </div>

              {/* Search Bar */}
              <div className="faq-search">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search FAQs..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="faq-list">
              {filteredFAQs.length === 0 ? (
                <div className="no-results">
                  <p>No FAQs found matching your search.</p>
                  <p>Try different keywords or contact support below.</p>
                </div>
              ) : (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                      <h3>{faq.question}</h3>
                      {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openFAQ === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Contact Support Section */}
            <div className="contact-section">
              <h3>Still need help?</h3>
              <p>Our support team is here to assist you 24/7</p>
              <div className="contact-options">
                <div className="contact-card">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <strong>Email Support</strong>
                    <p>support@itsupporthub.com</p>
                  </div>
                </div>
                <div className="contact-card">
                  <FaPhone className="contact-icon" />
                  <div>
                    <strong>Phone Support</strong>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>
              <Link to="/user/new-ticket" className="contact-btn">
                Raise a New Ticket
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="help-footer">
            <Link to="/user/dashboard" className="back-btn">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpFAQ;