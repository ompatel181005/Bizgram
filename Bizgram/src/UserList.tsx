import React from "react";
import { Card, Button } from "react-bootstrap";

interface User {
  id: number;
  name: string;
  company: string;
}

// Sample Data
const currentConnections: User[] = [
  { id: 1, name: "John Doe", company: "TechCorp" },
  { id: 2, name: "Alice Smith", company: "InnovateX" },
  { id: 3, name: "Bob Johnson", company: "FinServe" },
];

const suggestedConnections: User[] = [
  { id: 4, name: "Emma Brown", company: "Healthify" },
  { id: 5, name: "Michael Lee", company: "CyberNet" },
  { id: 6, name: "Sophia Davis", company: "CloudBase" },
  { id: 7, name: "David Wilson", company: "AI Labs" },
];

const UserList: React.FC = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed"
      style={{ width: "250px", right: 0 }}
    >
      {/* Current Connections */}
      <h6 className="mb-2">Current Connections</h6>
      <div className="overflow-auto" style={{ maxHeight: "35vh" }}>
        {currentConnections.map((user) => (
          <Card
            key={user.id}
            className="mb-2 bg-secondary text-white shadow-sm"
          >
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text className="text-muted">{user.company}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <hr />

      {/* Suggested Connections */}
      <h6 className="mb-2">Suggested New Connections</h6>
      <div className="overflow-auto" style={{ maxHeight: "45vh" }}>
        {suggestedConnections.map((user) => (
          <Card key={user.id} className="mb-2 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text className="text-muted">{user.company}</Card.Text>
              </div>
              <Button variant="primary" size="sm">
                Follow
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserList;
