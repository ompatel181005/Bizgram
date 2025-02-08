import React from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

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
    profilePic: "/pfps/pfp_10.jpg",
    business: "Tech Consultant & Developer",
    followers: 1200,
    following: 450,
    posts: 8,
  },
};

// List of recent posts from the `public/jio/` folder
const recentPosts = ["/jio/image1.png", "/jio/image2.png", "/jio/image3.png"];

const Profile: React.FC = () => {
  const params = useParams<{ username?: string }>();
  const username = params.username ?? "Honey Patel";
  const user = users[username] || users["Honey Patel"];

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

      {/* Recent Posts Section */}
      <div className="w-75 mt-4">
        <h4 className="mb-3 text-white">Recent Posts</h4>
        <Row xs={3} md={3} className="g-3">
          {recentPosts.map((image, index) => (
            <Col key={index}>
              <Card className="bg-dark">
                <Card.Img
                  src={image}
                  alt={`Recent post ${index + 1}`}
                  className="img-fluid"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Profile;
