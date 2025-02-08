import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaUser, FaUsers, FaEdit, FaEnvelope, FaCog, FaBell, FaSearch, FaTimes } from "react-icons/fa";

// Reusable Button Component for the Sidebar
const SidebarButton: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
  <Button
    variant="dark"
    className="w-100 mb-4 text-white d-flex align-items-center py-3"
    aria-label={label}
    style={{ fontSize: "1.2rem" }}
    onClick={onClick} // Handle button click
  >
    {icon}
    {label}
  </Button>
);

const Sidebar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false); // State for search overlay
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed">
        <h1>BizzGram</h1>
        <div className="flex-grow-1"></div>

        {/* Profile Button */}
        <SidebarButton icon={<FaUser className="me-2" />} label="Profile" />

        {/* Search Button (Opens Fullscreen Search) */}
        <SidebarButton icon={<FaSearch className="me-2" />} label="Search" onClick={() => setShowSearch(true)} />

        {/* Other Buttons */}
        <SidebarButton icon={<FaUsers className="me-2" />} label="Groups" />
        <SidebarButton icon={<FaEdit className="me-2" />} label="Post" />
        <SidebarButton icon={<FaEnvelope className="me-2" />} label="Messages" />
        <SidebarButton icon={<FaBell className="me-2" />} label="Notifications" />
        <SidebarButton icon={<FaCog className="me-2" />} label="Settings" />
      </div>

      {/* Fullscreen Search Overlay */}
      {showSearch && (
        <div className="search-overlay">
          <div className="search-container">
            <h1 className="search-title">What are you looking for?</h1>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <Form.Control
                type="text"
                placeholder="Search here..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaTimes className="close-icon" onClick={() => setShowSearch(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
