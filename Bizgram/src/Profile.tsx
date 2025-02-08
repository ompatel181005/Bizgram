import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

// Import Profile Picture from Feed_Pics
import myProfilePic from "/pfps/pfp_10.jpg"; // Honey Patel's profile picture

// Define the type for user data
interface UserProfile {
  profilePic: string;
  business: string;
  followers: number;
  following: number;
  posts: number;
}

// Define user data with an index signature
const users: Record<string, UserProfile> = {
  "Honey Patel": {
    profilePic: myProfilePic, // Use Honey Patel's profile picture
    business: "Tech Startup & Small Business Mentor",
    followers: 1200,
    following: 850,
    posts: 210,
  },
  "John Doe": {
    profilePic: "https://via.placeholder.com/100",
    business: "Handmade Leather Goods",
    followers: 500,
    following: 120,
    posts: 35,
  },
  "Alice Smith": {
    profilePic: "https://via.placeholder.com/100",
    business: "Custom Jewelry",
    followers: 350,
    following: 180,
    posts: 50,
  },
};

const Profile: React.FC = () => {
  const params = useParams<{ username?: string }>(); // Get username from URL
  const username = params.username ?? "Honey Patel"; // Default to Honey Patel
  const user = users[username] || users["Honey Patel"]; // Fallback if user not found

  return (
    <div className="d-flex flex-column align-items-center w-100 p-4">
      <Card className="w-75 bg-dark text-white p-3">
        {/* Profile Info Section */}
        <div className="d-flex align-items-center">
          <img
            src={user.profilePic}
            alt={username}
            className="rounded-circle me-4"
            width="100"
            height="100"
          />
          <div>
            <h3>{username}</h3>
            <p className="text-white-50">{user.business}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="d-flex justify-content-around mt-3">
          <div className="text-center">
            <h5>{user.posts}</h5>
            <p className="text-white-50">Posts</p>
          </div>
          <div className="text-center">
            <h5>{user.followers}</h5>
            <p className="text-white-50">Followers</p>
          </div>
          <div className="text-center">
            <h5>{user.following}</h5>
            <p className="text-white-50">Following</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
