import React, { useState, useEffect } from "react";

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
    <div className="search-overlay">
      <div className="search-container">
        <h1 className="typing-text">{text}</h1>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="close-icon" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;