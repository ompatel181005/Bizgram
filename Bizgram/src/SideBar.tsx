import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaUser, FaSearch, FaUsers, FaEdit, FaEnvelope } from "react-icons/fa";
import SearchOverlay from "./SearchOverlay"; // Import Search Overlay

const Sidebar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className="d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed" style={{ width: "250px" }}>
        {/* Profile Button */}
        <Button variant="dark" className="w-100 mb-3 d-flex align-items-center">
          <FaUser className="me-2" /> Profile
        </Button>

        {/* Search Button (Opens Overlay) */}
        <Button variant="dark" className="w-100 mb-3 d-flex align-items-center" onClick={() => setShowSearch(true)}>
          <FaSearch className="me-2" /> Search
        </Button>

        {/* Groups Button */}
        <Button variant="dark" className="w-100 mb-3 d-flex align-items-center">
          <FaUsers className="me-2" /> Groups
        </Button>

        {/* Post Button */}
        <Button variant="dark" className="w-100 mb-3 d-flex align-items-center">
          <FaEdit className="me-2" /> Post
        </Button>

        {/* Messages Button */}
        <Button variant="dark" className="w-100 d-flex align-items-center">
          <FaEnvelope className="me-2" /> Messages
        </Button>
      </div>

      {/* Show Search Overlay When Clicked */}
      {showSearch && <SearchOverlay closeOverlay={() => setShowSearch(false)} />}
    </>
  );
};

export default Sidebar;
