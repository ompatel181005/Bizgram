import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import Feed from "./Feed";
import Profile from "./Profile"; // Import Profile Page
import UserList from "./UserList"; // Import UserList component
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";



const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #181818;
  color: white;
  font-family: "Arial", sans-serif;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const SidebarWrapper = styled.div`
  width: 280px;
  background: #222;
  padding: 20px;
  border-right: 2px solid #333;
`;

const UserListWrapper = styled.div`
  width: 280px;
  background: #222;
  padding: 20px;
  border-left: 2px solid #333;
`;

const ModernWebpage: React.FC = () => {
  return (
    <Router>
      <div className="d-flex bg-black text-white">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content (Feed, Profile, etc.) */}
        <div
          className="flex-grow-1 p-0"
          style={{
            marginLeft: "250px",
            marginRight: "250px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<Feed />} /> {/* Home Feed */}
            <Route path="/profile/:username" element={<Profile />} />{" "}
            {/* Dynamic Profile Page */}
          </Routes>
        </div>

        {/* Right Sidebar (User List) */}
        <UserList />
      </div>
    </Router>
  );
};

export default ModernWebpage;
