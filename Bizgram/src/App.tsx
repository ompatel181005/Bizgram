import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import UserList from "./UserList";
import Feed from "./Feed";
import Profile from "./Profile"; // Import Profile Page
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
}

export default App;
