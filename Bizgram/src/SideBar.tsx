import React from "react";
import { Button } from "react-bootstrap";
import { FaUser, FaUsers, FaEdit, FaEnvelope } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
      style={{ width: "250px" }}
    >
      {/* Profile Button (Top) */}
      <Button
        variant="dark"
        className="w-100 mb-3 text-white d-flex align-items-center"
      >
        <FaUser className="me-2" /> Profile
      </Button>

      {/* Spacer to push other buttons to the middle */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <Button
          variant="dark"
          className="w-100 mb-3 text-white d-flex align-items-center"
        >
          <FaUsers className="me-2" /> Groups
        </Button>
        <Button
          variant="dark"
          className="w-100 mb-3 text-white d-flex align-items-center"
        >
          <FaEdit className="me-2" /> Post
        </Button>
        <Button
          variant="dark"
          className="w-100 mb-3 text-white d-flex align-items-center"
        >
          <FaEnvelope className="me-2" /> Messages
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
