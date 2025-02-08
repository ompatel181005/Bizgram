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
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false); // State for Post modal
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed">
        <h1>BizzGram</h1>
        <div className="flex-grow-1"></div>

        <SidebarButton
          icon={<FaUser className="me-2" />}
          label="Profile"
          onClick={() => navigate("/profile/Honey Patel")}
        />
        <SidebarButton icon={<FaSearch className="me-2" />} label="Search" />
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
              onClick={() => setShowPostModal(true)} // Open Post modal
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
    </>
  );
};

export default Sidebar;
