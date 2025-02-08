import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

// Sample Data with Random Profile Pictures
const currentConnections = [
  { id: 1, name: "John Doe", company: "TechCorp", profilePic: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Alice Smith", company: "InnovateX", profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Bob Johnson", company: "FinServe", profilePic: "https://randomuser.me/api/portraits/men/3.jpg" },
];

const suggestedConnections = [
  { id: 4, name: "Emma Brown", company: "Healthify", profilePic: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael Lee", company: "CyberNet", profilePic: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Sophia Davis", company: "CloudBase", profilePic: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 7, name: "David Wilson", company: "AI Labs", profilePic: "https://randomuser.me/api/portraits/men/7.jpg" },
];

// Styled Components for Better Styling
const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  background: #121212; // Dark background
  color: #fff;
  font-family: "Poppins, sans-serif"; // Use Poppins font
  padding: 20px;
  position: fixed;
  right: 0;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.5); // Shadow for depth
`;

const SectionTitle = styled.h6`
  font-size: 1.1rem;
  font-weight: 600; // Semi-bold for section titles
  color: #fff;
  margin-bottom: 16px;
  font-family: inherit; // Inherit the font from SidebarContainer
`;

const UserCard = styled(Card)`
  background: #1e1e1e; // Slightly lighter dark background
  border: none;
  border-radius: 12px;
  margin-bottom: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: inherit; // Inherit the font from SidebarContainer

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserName = styled(Card.Title)`
  font-size: 1rem;
  font-weight: 500; // Medium for user names
  color: #fff;
  margin-bottom: 4px;
  font-family: inherit; // Inherit the font from SidebarContainer
`;

const UserCompany = styled(Card.Text)`
  font-size: 0.9rem;
  font-weight: 400; // Regular for company names
  color: #aaa;
  font-family: inherit; // Inherit the font from SidebarContainer
`;

const FollowButton = styled(Button)`
  font-size: 0.9rem;
  font-weight: 500; // Medium for buttons
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.3s;
  font-family: inherit; // Inherit the font from SidebarContainer

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#535bf2" : "#45a049"};
  }
`;

const ScrollableContainer = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none; /* For IE 10+ */
  scrollbar-width: none; /* For Firefox */
  padding-right: 10px;

  /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserList: React.FC = () => {
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleConnections, setVisibleConnections] = useState(3);

  const handleFollowToggle = (userId: number) => {
    setFollowedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const loadMoreConnections = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleConnections((prev) => prev + 3);
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  return (
    <SidebarContainer>
      {/* Current Connections Section */}
      <div>
        <SectionTitle>Current Connections</SectionTitle>
        <ScrollableContainer style={{ height: "40vh" }}>
          {currentConnections.map((user) => (
            <UserCard key={user.id}>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <UserInfo>
                  <ProfilePic src={user.profilePic} alt={user.name} />
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserCompany>{user.company}</UserCompany>
                  </div>
                </UserInfo>
              </Card.Body>
            </UserCard>
          ))}
        </ScrollableContainer>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: "#444", margin: "16px 0" }} />

      {/* Suggested Connections Section */}
      <div>
        <SectionTitle>Suggested New Connections</SectionTitle>
        <ScrollableContainer style={{ height: "40vh" }}>
          {suggestedConnections.slice(0, visibleConnections).map((user) => (
            <UserCard key={user.id}>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <UserInfo>
                  <ProfilePic src={user.profilePic} alt={user.name} />
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserCompany>{user.company}</UserCompany>
                  </div>
                </UserInfo>
                <FollowButton
                  variant={followedUsers.includes(user.id) ? "success" : "primary"}
                  onClick={() => handleFollowToggle(user.id)}
                >
                  {followedUsers.includes(user.id) ? "Following" : "Follow"}
                </FollowButton>
              </Card.Body>
            </UserCard>
          ))}
          {visibleConnections < suggestedConnections.length && (
            <FollowButton
              variant="outline-light"
              className="w-100 mt-2"
              onClick={loadMoreConnections}
              disabled={loading}
            >
              {loading ? "Loading..." : "View More"}
            </FollowButton>
          )}
        </ScrollableContainer>
      </div>
    </SidebarContainer>
  );
};

export default UserList;