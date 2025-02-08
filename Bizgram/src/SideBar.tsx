import React, { useState, useEffect } from "react";
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

// Random names & actions for notifications
const names = [
  "John Doe",
  "Alice Smith",
  "Emma Brown",
  "Michael Lee",
  "David Wilson",
  "Sophia Davis",
];
const actions = [
  "liked your post",
  "commented on your post",
  "started a new business",
  "followed you",
  "mentioned you in a post",
];

const generateNotification = () => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  return `${randomName} ${randomAction}`;
};

// Reusable Button Component for Sidebar
const SidebarButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  showBadge?: boolean;
}> = ({ icon, label, onClick, showBadge }) => (
  <Button
    variant="dark"
    className="w-100 mb-4 text-white d-flex align-items-center py-3"
    aria-label={label}
    style={{
      fontSize: "1.2rem",
      transition: "background-color 0.3s, transform 0.2s",
      fontFamily: "'Poppins', sans-serif",
      background: "#1e1e1e",
      border: "none",
      color: "#fff",
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#646cff";
      e.currentTarget.style.transform = "scale(1.02)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#1e1e1e";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {icon}
    <span style={{ marginLeft: "10px" }}>{label}</span>
    {showBadge && <span className="notification-badge"></span>}
  </Button>
);

const Sidebar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const navigate = useNavigate();

  // Generate new notifications every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => [generateNotification(), ...prev].slice(0, 5));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      {/* Sidebar */}
      <div
        className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
        style={{
          background: "#121212",
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
            color: "#646cff",
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
          onClick={() => setShowSearch(true)}
        />

        {/* Groups Button (Navigates to /groups) */}
        <SidebarButton
          icon={<FaUsers className="me-2" />}
          label="Groups"
          onClick={() => navigate("/groups")}
        />

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
              onClick={() => setShowPostModal(true)}
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
          onClick={() => setShowNotifications(!showNotifications)}
          showBadge={notifications.length > 0}
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
          <div
            className="upload-container"
            style={{
              border: "2px solid red", // Debugging border
              padding: "20px", // Add padding
            }}
          >
            <div className="icon-placeholder mb-3">
              {/* Icon representing photo/video */}
              <FaEdit size={50} />
            </div>
            <h4>Drag photos and videos here</h4>
            <Button
              variant="primary"
              className="mt-3"
              style={{
                border: "2px solid blue", // Debugging border
              }}
            >
              Select from computer
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="notifications-overlay">
          <div className="notifications-container">
            <h2>Notifications</h2>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  <p>{notification}</p>
                </div>
              ))
            ) : (
              <p className="no-notifications">No new notifications</p>
            )}
          </div>
          <button className="close-button" onClick={() => setShowNotifications(false)}>
            <FaTimes />
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sidebar;
