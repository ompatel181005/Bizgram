import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
  const [showSearch, setShowSearch] = useState(false); // State for Search Overlay
  const [showPostOptions, setShowPostOptions] = useState(false); // State for Post Options
  const [showPostModal, setShowPostModal] = useState(false); // State for Post Modal
  const navigate = useNavigate();

  return (
    <React.Fragment>
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

        {/* Profile Button */}
        <SidebarButton
          icon={<FaUser className="me-2" />}
          label="Profile"
          onClick={() => navigate("/profile/Honey Patel")}
        />

        {/* Search Button */}
        <SidebarButton
          icon={<FaSearch className="me-2" />}
          label="Search"
          onClick={() => setShowSearch(true)} // Open Search Overlay
        />

        {/* Groups Button */}
        <SidebarButton icon={<FaUsers className="me-2" />} label="Groups" />

        {/* Post Button */}
        <SidebarButton
          icon={<FaEdit className="me-2" />}
          label="Post"
          onClick={() => setShowPostOptions((prev) => !prev)}
        />
        {showPostOptions && (
          <div className="post-options bg-light text-dark p-3 rounded">
            <Button
              variant="outline-dark"
              className="w-100 mb-2"
              onClick={() => setShowPostModal(true)} // Open Post Modal
            >
              Post
            </Button>
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => console.log("AI Character clicked")}
            >
              AI Character
            </Button>
          </div>
        )}

        {/* Messages Button */}
        <SidebarButton
          icon={<FaEnvelope className="me-2" />}
          label="Messages"
        />

        {/* Notifications Button */}
        <SidebarButton
          icon={<FaBell className="me-2" />}
          label="Notifications"
        />

        {/* Settings Button */}
        <SidebarButton icon={<FaCog className="me-2" />} label="Settings" />
      </div>

      {/* Fullscreen Search Overlay */}
      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}

      {/* Post Modal */}
      <Modal show={showPostModal} onHide={() => setShowPostModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create new post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="upload-container">
            <div className="icon-placeholder mb-3">
              {/* Icon representing photo/video */}
              <FaEdit size={50} />
            </div>
            <h4>Drag photos and videos here</h4>
            <Button variant="primary" className="mt-3">
              Select from computer
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Sidebar;