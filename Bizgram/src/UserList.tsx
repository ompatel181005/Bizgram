import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

// Sample Data: Users with Names & Profile Pictures from `/public/pfp/`
const users = [
  { id: 1, name: "John Doe", imgSrc: "/pfps/pfp_1.jpg" },
  { id: 2, name: "Prince Patel", imgSrc: "/pfps/pfp_2.jpg" },
  { id: 3, name: "Michael Lee", imgSrc: "/pfps/pfp_3.jpg" },
  { id: 4, name: "Om Patel", imgSrc: "/pfps/pfp_4.jpg" },
  { id: 5, name: "David Wilson", imgSrc: "/pfps/pfp_5.jpg" },
  { id: 6, name: "Emma Brown", imgSrc: "/pfps/pfp_6.jpg" },
  { id: 7, name: "Mahi Patel", imgSrc: "/pfps/pfp_7.jpg" },
  { id: 8, name: "Unchi Chuchi", imgSrc: "/pfps/pfp_8.jpg" },
  { id: 9, name: "Princy Patel", imgSrc: "/pfps/pfp_9.jpg" },
  { id: 10, name: "Honey Patel", imgSrc: "/pfps/pfp_10.jpg" },
];

// Styled Scrollable Container
const ScrollableContainer = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-right: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserList: React.FC = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
      style={{
        width: "280px",
        right: 0,
        background: "#121212",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        {/* User Profiles Section */}
        <div style={{ flex: 1 }}>
          <h6 className="mb-2 text-white" style={{ fontSize: "1.2rem" }}>
            Mentor Profiles
          </h6>
          <ScrollableContainer
            style={{
              height: "85vh",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {users.map((user) => (
              <div key={user.id} className="text-center">
                <img
                  src={user.imgSrc}
                  alt={user.name}
                  className="rounded-circle"
                  width="70"
                  height="70"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "5px",
                    color: "#fff",
                  }}
                >
                  {user.name}
                </p>
              </div>
            ))}
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
};

export default UserList;
