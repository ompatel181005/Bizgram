import React, { useState, useEffect } from "react";

interface SearchOverlayProps {
  onClose: () => void; // Function to close the overlay
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => {
  const [text, setText] = useState(""); // State for the animated text
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input
  const fullText = "What are you looking for?"; // Text to be animated

  // Typing animation for the text
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Add one letter at a time
        index++;
      } else {
        clearInterval(interval); // Stop the animation when the text is complete
      }
    }, 100); // Typing speed (100ms per letter)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle search input change
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
        {/* Animated Text */}
        <h1
          className="typing-text"
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            fontWeight: "600",
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: "3px solid #fff", // Blinking cursor effect
            width: `${text.length}ch`, // Adjust width based on text length
          }}
        >
          {text}
        </h1>

        {/* Search Box */}
        <div
          className="search-box"
          style={{
            background: "#1e1e1e", // Slightly lighter dark background
            borderRadius: "30px",
            padding: "10px 20px",
            border: "2px solid #646cff", // Accent color for contrast
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearch}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff", // White text for contrast
              fontSize: "1.2rem",
              outline: "none", // Remove default outline
            }}
          />
          {/* Close Button */}
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
};

export default SearchOverlay;