import React, { useState, useEffect } from "react";
import { FaTimes, FaUser } from "react-icons/fa";

// Random Avatar Generator (Uses DiceBear Avatars)
const getRandomAvatar = (name: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
};

// Random Business Names
const businessList = [
  "Tech Innovators", "Handmade Crafts", "Personal Finance Hub",
  "Health & Wellness", "AI & Automation", "Luxury Clothing",
  "Freelance Design", "Digital Marketing", "Organic Skincare",
];

// Generate a random profile
const generateProfile = (name: string) => {
  const randomBusiness = businessList[Math.floor(Math.random() * businessList.length)];
  return {
    name,
    business: randomBusiness,
    avatar: getRandomAvatar(name),
  };
};

interface SearchOverlayProps {
  closeOverlay: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ closeOverlay }) => {
  const [text, setText] = useState("");
  const [results, setResults] = useState<{ name: string; business: string; avatar: string }[]>([]);

  useEffect(() => {
    if (text.trim() !== "") {
      const profile = generateProfile(text);
      setResults([profile]); // Show one result for now
    } else {
      setResults([]);
    }
  }, [text]);

  // Close overlay when pressing ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeOverlay]);

  return (
    <div className="search-overlay">
      {/* Close Button (Top-right corner) */}
      <button className="close-button" onClick={closeOverlay}>
        <FaTimes />
      </button>

      <div className="search-container">
        <h1 className="typing-text">What are you looking for?</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a person..."
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Search Results */}
        <div className="search-results">
          {results.length > 0 && (
            <div className="profile-card">
              <img src={results[0].avatar} alt={results[0].name} className="profile-avatar" />
              <div>
                <h3>{results[0].name}</h3>
                <p className="profile-business">{results[0].business}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
