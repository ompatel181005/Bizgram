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
import SearchOverlay from "./SearchOverlay";

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
    style={{
      fontSize: "1.2rem",
      transition: "background-color 0.3s, transform 0.2s",
      fontFamily: "'Poppins', sans-serif",
      background: "#1e1e1e", // Dark background
      border: "none",
      color: "#fff", // White text
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#646cff"; // Accent color on hover
      e.currentTarget.style.transform = "scale(1.02)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#1e1e1e";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {icon}
    <span style={{ marginLeft: "10px" }}>{label}</span>
  </Button>
);

const Sidebar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
        style={{
          background: "#121212", // Dark background
          fontFamily: "'Poppins', sans-serif",
          width: "280px",
        }}
      >
        {/* Clickable Logo */}
        <h1
          className="cursor-pointer text-center mb-4"
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            color: "#646cff", // Accent color
            fontSize: "2rem",
            fontWeight: "700",
          }}
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
      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
    </>
  );
};

export default Sidebar;