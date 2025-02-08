import React, { useState, useEffect } from "react";

const SearchOverlay: React.FC = () => {
  const [text, setText] = useState("");
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

  return (
    <div className="search-overlay">
      <div className="search-container">
        <h1 className="typing-text">{text}</h1> {/* Animated Text */}
        <div className="search-box">
          <input type="text" placeholder="Search..." className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
