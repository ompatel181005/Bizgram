import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [text, setText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const fullText = "What are you looking for?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Typing speed (100ms per letter)

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Add logic to filter/search results here
  };

  return (
    <div
      className="search-overlay"
      style={{
        background: "#121212", // Dark background
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="search-container">
        <h1
          className="typing-text"
          style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "600" }}
        >
          {text}
        </h1>
        <div
          className="search-box"
          style={{
            background: "#1e1e1e", // Slightly lighter dark background
            borderRadius: "30px",
            padding: "10px 20px",
            border: "2px solid #646cff", // Accent color for contrast
          }}
        >
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={searchQuery}
            onChange={handleSearch}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff", // White text for contrast
              fontSize: "1.2rem",
            }}
          />
          <button
            className="close-icon"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#646cff", // Accent color
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;