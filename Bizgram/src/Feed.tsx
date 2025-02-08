import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";


// Import images from Feed_Pics folder
import image1 from "/Feed_Pics/image1.png";
import image2 from "/Feed_Pics/image2.png";
import image3 from "/Feed_Pics/image3.png";
import image4 from "/Feed_Pics/image4.png";
import image5 from "/Feed_Pics/image5.png";
import image6 from "/Feed_Pics/image6.png";
import image7 from "/Feed_Pics/image7.png";
import image8 from "/Feed_Pics/image8.png";
import image9 from "/Feed_Pics/image9.png";
import image10 from "/Feed_Pics/image10.png";

import pfp_1 from "/pfps/pfp_1.jpg";
import pfp_2 from "/pfps/pfp_2.jpg";
import pfp_3 from "/pfps/pfp_3.jpg";
import pfp_4 from "/pfps/pfp_4.jpg";
import pfp_5 from "/pfps/pfp_5.jpg";
import pfp_6 from "/pfps/pfp_6.jpg";
import pfp_7 from "/pfps/pfp_7.jpg";
import pfp_8 from "/pfps/pfp_8.jpg";
import pfp_9 from "/pfps/pfp_9.jpg";
import pfp_10 from "/pfps/pfp_10.jpg";

interface Post {
  id: number;
  username: string;
  businessDescription: string; // New business description field
  profilePic: string;
  image: string;
  caption: string;
  timestamp: string;
}

// Updated posts array with small business descriptions
const posts: Post[] = [
  {
    id: 1,
    username: "John Doe",
    businessDescription: "Handmade leather goods",
    profilePic: pfp_1,
    image: image1,
    caption: "Enjoying the sunset!",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    username: "Alice Smith",
    businessDescription: "Custom jewelry designer",
    profilePic: pfp_2,
    image: image2,
    caption: "New adventures!",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    username: "Emma Brown",
    businessDescription: "Organic skincare products",
    profilePic: pfp_3,
    image: image3,
    caption: "Chilling with friends!",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    username: "Michael Lee",
    businessDescription: "Tech gadgets & accessories",
    profilePic: pfp_4,
    image: image4,
    caption: "Workout time!",
    timestamp: "3 days ago",
  },
  {
    id: 5,
    username: "David Wilson",
    businessDescription: "Personalized artwork",
    profilePic: pfp_5,
    image: image5,
    caption: "Loving nature!",
    timestamp: "4 days ago",
  },
  {
    id: 6,
    username: "Sophia Davis",
    businessDescription: "Handmade candles & decor",
    profilePic: pfp_6,
    image: image6,
    caption: "Beach vibes!",
    timestamp: "5 days ago",
  },
  {
    id: 7,
    username: "Olivia Martinez",
    businessDescription: "Eco-friendly fashion",
    profilePic: pfp_7,
    image: image7,
    caption: "Throwback to last weekend!",
    timestamp: "6 days ago",
  },
  {
    id: 8,
    username: "Bob Johnson",
    businessDescription: "Custom furniture craftsman",
    profilePic: pfp_8,
    image: image8,
    caption: "Hiking trip!",
    timestamp: "1 week ago",
  },
  {
    id: 9,
    username: "Chris Evans",
    businessDescription: "Local coffee roaster",
    profilePic: pfp_9,
    image: image9,
    caption: "Morning coffee!",
    timestamp: "2 weeks ago",
  },
  {
    id: 10,
    username: "Lily Parker",
    businessDescription: "Boutique clothing brand",
    profilePic: pfp_10,
    image: image10,
    caption: "City lights!",
    timestamp: "3 weeks ago",
  },
];

const Feed: React.FC = () => {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});

  const handleLike = (postId: number) => {
    setLiked((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    setLikes((prev) => ({
      ...prev,
      [postId]: prev[postId] ? prev[postId] - 1 : (prev[postId] || 0) + 1,
    }));
  };

  const handleComment = (postId: number) => {
    console.log(`Comment clicked on post ${postId}`);
  };

  const handleShare = (postId: number) => {
    console.log(`Share clicked on post ${postId}`);
  };

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
            <div>
              <strong>{post.username}</strong>
              <p className="text-white-50 mb-0 small">
                {post.businessDescription}
              </p>{" "}
              {/* Small business description */}
            </div>
          </Card.Header>

          {/* Post Image */}
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
              <FaHeart
                size={25}
                className={`cursor-pointer ${
                  liked[post.id] ? "text-danger" : "text-white"
                }`}
                onClick={() => handleLike(post.id)}
              />
              <FaComment
                size={25}
                className="text-info cursor-pointer"
                onClick={() => handleComment(post.id)}
              />
              <FaShare
                size={25}
                className="text-warning cursor-pointer"
                onClick={() => handleShare(post.id)}
              />
            </div>

            {/* Like Count */}
            <p className="text-muted small">
              {likes[post.id]
                ? `${likes[post.id]} likes`
                : "Be the first to like this"}
            </p>

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
