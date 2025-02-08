import React from "react";
import { Button } from "react-bootstrap";
import { FaUser, FaUsers, FaEdit, FaEnvelope } from "react-icons/fa"; // Icons

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center bg-light p-3 vh-100 position-fixed"
      style={{ width: "250px" }}
    >
      {/* Profile Button */}
      <Button variant="light" className="w-100 mb-3 d-flex align-items-center">
        <FaUser className="me-2" /> Profile
      </Button>

      {/* Groups Button */}
      <Button variant="light" className="w-100 mb-3 d-flex align-items-center">
        <FaUsers className="me-2" /> Groups
      </Button>

      {/* Post Button */}
      <Button variant="light" className="w-100 mb-3 d-flex align-items-center">
        <FaEdit className="me-2" /> Post
      </Button>

      {/* Messages Button */}
      <Button variant="light" className="w-100 d-flex align-items-center">
        <FaEnvelope className="me-2" /> Messages
      </Button>
    </div>
  );
};

export default Sidebar;
