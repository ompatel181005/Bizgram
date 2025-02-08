import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import Feed from "./Feed";
import Profile from "./Profile";
import UserList from "./UserList";
import Groups from "./Groups";
import Messages from "./Messages"; // Import Messages Page
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="d-flex bg-black text-white">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content (Feed, Profile, Groups, Messages) */}
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
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/messages" element={<Messages />} />{" "}
            {/* Messages Page */}
          </Routes>
        </div>

        {/* Right Sidebar (User List) */}
        <UserList />
      </div>
    </Router>
  );
}

export default App;
