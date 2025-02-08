import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  FaUser,
  FaUsers,
  FaEdit,
  FaEnvelope,
  FaCog,
  FaBell,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Reusable Button Component for the Sidebar
const SidebarButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => (
  <Button
    variant="dark"
    className="w-100 mb-4 text-white d-flex align-items-center py-3"
    aria-label={label}
    style={{ fontSize: "1.2rem" }}
    onClick={onClick}
  >
    {icon}
    {label}
  </Button>
);

const Sidebar: React.FC = () => {
<<<<<<< HEAD
  const [showSearch, setShowSearch] = useState(false); // State for search overlay
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const navigate = useNavigate(); // Hook to handle navigation
=======
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
>>>>>>> a6fc6ad56deb8b57dcf70d0899c6c85ff6782fc3

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed">
        {/* Clickable Logo */}
        <h1
          className="cursor-pointer text-center mb-4"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          BizzGram
        </h1>

        <div className="flex-grow-1"></div>

        {/* Profile Button (Navigates to Honey Patel's Profile) */}
        <SidebarButton
          icon={<FaUser className="me-2" />}
          label="Profile"
          onClick={() => navigate("/profile/Honey Patel")}
        />

        {/* Search Button (Opens Fullscreen Search) */}
        <SidebarButton
          icon={<FaSearch className="me-2" />}
          label="Search"
          onClick={() => setShowSearch(true)}
        />

        {/* Other Buttons */}
        <SidebarButton icon={<FaUsers className="me-2" />} label="Groups" />
        <SidebarButton icon={<FaEdit className="me-2" />} label="Post" />
        <SidebarButton
          icon={<FaEnvelope className="me-2" />}
          label="Messages"
        />
        <SidebarButton
          icon={<FaBell className="me-2" />}
          label="Notifications"
        />
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
              <FaTimes
                className="close-icon"
                onClick={() => setShowSearch(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
