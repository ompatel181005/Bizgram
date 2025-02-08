import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

interface Post {
  id: number;
  username: string;
  profilePic: string;
  image: string;
  caption: string;
  timestamp: string;
}

// Sample posts
const posts: Post[] = [
  {
    id: 1,
    username: "John Doe",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Enjoying the sunset!",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    username: "Alice Smith",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "New adventures!",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    username: "Emma Brown",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Chilling with friends!",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    username: "Michael Lee",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Workout time!",
    timestamp: "3 days ago",
  },
  {
    id: 5,
    username: "David Wilson",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Loving nature!",
    timestamp: "4 days ago",
  },
  {
    id: 6,
    username: "Sophia Davis",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Beach vibes!",
    timestamp: "5 days ago",
  },
  {
    id: 7,
    username: "Olivia Martinez",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Throwback to last weekend!",
    timestamp: "6 days ago",
  },
  {
    id: 8,
    username: "Bob Johnson",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Hiking trip!",
    timestamp: "1 week ago",
  },
  {
    id: 9,
    username: "Chris Evans",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "Morning coffee!",
    timestamp: "2 weeks ago",
  },
  {
    id: 10,
    username: "Lily Parker",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/500",
    caption: "City lights!",
    timestamp: "3 weeks ago",
  },
];

const Feed: React.FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center p-3 overflow-auto"
      style={{ maxHeight: "100vh" }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          className="mb-4 bg-dark text-white shadow-sm"
          style={{ width: "80%", maxWidth: "600px" }}
        >
          {/* User Info */}
          <Card.Header className="d-flex align-items-center bg-secondary">
            <img
              src={post.profilePic}
              alt={post.username}
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <strong>{post.username}</strong>
          </Card.Header>

          {/* Post Image */}
          <Card.Img variant="top" src={post.image} className="w-100" />

          {/* Like, Comment, Share Icons */}
          <Card.Body>
            <div className="d-flex justify-content-around mb-2">
              <FaHeart size={20} className="text-danger" />
              <FaComment size={20} className="text-info" />
              <FaShare size={20} className="text-warning" />
            </div>

            {/* Caption */}
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>

            {/* Timestamp */}
            <p className="text-muted small">{post.timestamp}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Feed;
