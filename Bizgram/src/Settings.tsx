import React from "react";
import { FaTimes } from "react-icons/fa";

interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  return (
    <div className="settings-overlay">
      <div className="settings-container">
        <h2>Settings</h2>
        <ul className="settings-list">
          <li>Account</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Connected Devices</li>
          <li>Notification Settings</li>
          <li>About</li>
        </ul>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Settings;
