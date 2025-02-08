import React, { useState, useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

// Function to generate a random avatar based on name
const getRandomAvatar = (name: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
};

// List of random business categories
const businessList = [
  "Tech Innovators", "Handmade Crafts", "Personal Finance Hub",
  "Health & Wellness", "AI & Automation", "Luxury Clothing",
  "Freelance Design", "Digital Marketing", "Organic Skincare",
];

// Function to generate a random business for a profile
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
  const [searchText, setSearchText] = useState(""); // Stores input text
  const [profile, setProfile] = useState<{ name: string; business: string; avatar: string } | null>(null);

  useEffect(() => {
    if (searchText.trim() !== "") {
      const newProfile = generateProfile(searchText);
      setProfile(newProfile);
    } else {
      setProfile(null);
    }
  }, [searchText]);

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

        {/* Search Box */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for a person..."
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Show Profile if Input is Not Empty */}
        {profile && (
          <div className="search-results">
            <div className="profile-card">
              <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
              <div>
                <h3>{profile.name}</h3>
                <p className="profile-business">{profile.business}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
