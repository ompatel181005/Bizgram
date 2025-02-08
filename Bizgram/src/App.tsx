import React from "react";
import Sidebar from "./SideBar";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex bg-black text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content (Feed) */}
      {/* Main Content (Feed) */}
      <div
        className="flex-grow-1 p-4 bg-black text-white"
        style={{ marginLeft: "250px", marginRight: "250px" }}
      >
        <h1>Feed Goes Here</h1>
      </div>

      {/* Right Sidebar (User List) */}
      <UserList />
    </div>
  );
}

export default App;
