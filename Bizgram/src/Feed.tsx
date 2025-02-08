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
    image: "https://via.placeholder.com/800x600",
    caption: "Enjoying the sunset!",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    username: "Alice Smith",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "New adventures!",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    username: "Emma Brown",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "Chilling with friends!",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    username: "Michael Lee",
    profilePic: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/800x600",
    caption: "Workout time!",
    timestamp: "3 days ago",
  },
];

const Feed: React.FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center w-100"
      style={{
        overflowY: "scroll",
        height: "100vh",
        scrollSnapType: "y mandatory",
      }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          className="d-flex flex-column bg-dark text-white w-100"
          style={{ height: "100vh", scrollSnapAlign: "start" }}
        >
          {/* User Info */}
          <Card.Header className="d-flex align-items-center bg-secondary">
            <img
              src={post.profilePic}
              alt={post.username}
              className="rounded-circle me-2"
              width="50"
              height="50"
            />
            <strong>{post.username}</strong>
          </Card.Header>

          {/* Post Image (Expands to fill screen) */}
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <Card.Img
              variant="top"
              src={post.image}
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          {/* Like, Comment, Share Icons */}
          <Card.Body>
            <div className="d-flex justify-content-around mb-2">
              <FaHeart size={25} className="text-danger" />
              <FaComment size={25} className="text-info" />
              <FaShare size={25} className="text-warning" />
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
