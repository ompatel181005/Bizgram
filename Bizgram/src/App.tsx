import React from "react";
import Sidebar from "./SideBar";
import UserList from "./UserList";
import Feed from "./Feed";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex bg-black text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content (Feed) */}
      <div
        className="flex-grow-1 p-0"
        style={{
          marginLeft: "250px",
          marginRight: "250px",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Feed />
      </div>

      {/* Right Sidebar (User List) */}
      <UserList />
    </div>
  );
}

export default App;
