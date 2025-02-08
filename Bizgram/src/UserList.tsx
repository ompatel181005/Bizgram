import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

// Sample Data
const currentConnections = [
  { id: 1, name: "John Doe", company: "TechCorp" },
  { id: 2, name: "Alice Smith", company: "InnovateX" },
  { id: 3, name: "Bob Johnson", company: "FinServe" },
];

const suggestedConnections = [
  { id: 4, name: "Emma Brown", company: "Healthify" },
  { id: 5, name: "Michael Lee", company: "CyberNet" },
  { id: 6, name: "Sophia Davis", company: "CloudBase" },
  { id: 7, name: "David Wilson", company: "AI Labs" },
];

// Styled component for the scrollable container
const ScrollableContainer = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none; /* For IE 10+ */
  scrollbar-width: none; /* For Firefox */
  padding-right: 20px;

  /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserList: React.FC = () => {
  // Initialize state to track which user is followed
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  // Function to toggle follow state
  const handleFollowToggle = (userId: number) => {
    setFollowedUsers(
      (prev) =>
        prev.includes(userId)
          ? prev.filter((id) => id !== userId) // Unfollow if already followed
          : [...prev, userId] // Follow if not already followed
    );
  };

  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
      style={{ width: "250px", right: 0 }}
    >
      {/* Container for both sections */}
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        {/* Current Connections */}
        <div style={{ flex: 1 }}>
          <h6 className="mb-2">Current Connections</h6>
          <ScrollableContainer style={{ height: "50vh" }}>
            {currentConnections.map((user, index) => (
              <Card
                key={user.id}
                className="mb-2 bg-secondary text-white shadow-sm"
                style={{
                  borderRadius: "8px",
                  marginBottom: "0.5rem", // Reduced space between cards
                }}
              >
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text className="text-muted">{user.company}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </ScrollableContainer>
        </div>
        {/* Reduced spacing between sections */}
        <hr className="my-2" /> {/* Reduced margin for <hr> */}
        {/* Suggested Connections */}
        <div style={{ flex: 1 }}>
          <h6 className="mb-2" style={{ color: "white" }}>
            Suggested New Connections
          </h6>
          <ScrollableContainer style={{ height: "50vh" }}>
            {suggestedConnections.map((user, index) => (
              <Card
                key={user.id}
                className="mb-2 shadow-sm"
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#333",
                  marginBottom: "0.5rem", // Reduced space between cards
                }}
              >
                <Card.Body
                  className="d-flex justify-content-between align-items-center"
                  style={{ color: "white" }}
                >
                  <div>
                    <Card.Title style={{ color: "white" }}>
                      {user.name}
                    </Card.Title>
                    <Card.Text
                      style={{ color: "white" }}
                      className="text-muted"
                    >
                      {user.company}
                    </Card.Text>
                  </div>
                  <Button
                    variant={
                      followedUsers.includes(user.id) ? "success" : "primary"
                    }
                    size="sm"
                    onClick={() => handleFollowToggle(user.id)}
                  >
                    {followedUsers.includes(user.id) ? "Following" : "Follow"}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
};

export default UserList;
