import React from "react";
import Sidebar from "./SideBar"; // Adjust the path if needed
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
        {/* Main content goes here */}
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
