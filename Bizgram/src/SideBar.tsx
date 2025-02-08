import React, { JSX } from "react";
import { Button } from "react-bootstrap";
import { FaUser, FaUsers, FaEdit, FaEnvelope, FaCog, FaBell, FaSearch } from "react-icons/fa";

// Reusable Button Component for the Sidebar
const SidebarButton: React.FC<{ icon: JSX.Element; label: string }> = ({ icon, label }) => (
  <Button
    variant="dark"
    className="w-100 mb-4 text-white d-flex align-items-center py-3" // Increase padding to make buttons larger
    aria-label={label}
    style={{ fontSize: "1.2rem" }} // Increase font size for better visibility
  >
    {icon}
    {label}
  </Button>
);

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed">
      <h1>BizGram</h1>
      {/* Spacer */}
      <div className="flex-grow-1"></div>
      
      {/* Profile Button */}
      <SidebarButton icon={<FaUser className="me-2" />} label="Profile" />


      {/* Existing Buttons with Increased Size */}
      
      <SidebarButton icon={<FaSearch className="me-2" />} label="Search" />
      <SidebarButton icon={<FaUsers className="me-2" />} label="Groups" />
      <SidebarButton icon={<FaEdit className="me-2" />} label="Post" />
      <SidebarButton icon={<FaEnvelope className="me-2" />} label="Messages" />
      <SidebarButton icon={<FaBell className="me-2" />} label="Notifications" />
      <SidebarButton icon={<FaCog className="me-2" />} label="Settings" />

      {/* Bottom Spacer */}
      <div className="mt-auto">
        {/* Optional space at the bottom for additional elements */}
      </div>
    </div>
  );
};

export default Sidebar;
