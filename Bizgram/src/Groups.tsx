import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

// Dummy Data: Groups You Are Part Of
const joinedGroups = [
  {
    name: "Startup Founders",
    members: ["pfps/pfp_1.jpg", "pfps/pfp_2.jpg", "pfps/pfp_3.jpg"],
  },
  {
    name: "Tech Enthusiasts",
    members: ["pfps/pfp_4.jpg", "pfps/pfp_5.jpg", "pfps/pfp_6.jpg"],
  },
];

// Dummy Data: Suggested Communities
const suggestedGroups = [
  {
    name: "AI Innovators",
    members: ["pfps/pfp_7.jpg", "pfps/pfp_8.jpg", "pfps/pfp_9.jpg"],
  },
  {
    name: "Marketing Gurus",
    members: ["pfps/pfp_10.jpg", "pfps/pfp_3.jpg", "pfps/pfp_8.jpg"],
  },
  {
    name: "Web3 Builders",
    members: ["pfps/pfp_1.jpg", "pfps/pfp_4.jpg", "pfps/pfp_5.jpg"],
  },
];

const Groups: React.FC = () => {
  const [joined, setJoined] = useState<string[]>([]);

  const handleJoin = (groupName: string) => {
    if (!joined.includes(groupName)) {
      setJoined([...joined, groupName]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center w-100 p-4">
      {/* Groups You Are Part Of */}
      <div className="w-75 mb-4">
        <h4 className="mb-3 text-white">Groups You Are Part Of</h4>
        <Row xs={1} md={2} className="g-3">
          {joinedGroups.map((group, index) => (
            <Col key={index}>
              <Card className="bg-dark text-white p-3">
                <Card.Body>
                  <h5>{group.name}</h5>
                  <div className="d-flex">
                    {group.members.map((profile, i) => (
                      <img
                        key={i}
                        src={profile}
                        alt="Member"
                        className="rounded-circle me-2"
                        width="50"
                        height="50"
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Suggested Communities */}
      <div className="w-75">
        <h4 className="mb-3 text-white">
          You May Find These Communities Interesting
        </h4>
        <Row xs={1} md={2} className="g-3">
          {suggestedGroups.map((group, index) => (
            <Col key={index}>
              <Card className="bg-dark text-white p-3">
                <Card.Body>
                  <h5>{group.name}</h5>
                  <div className="d-flex">
                    {group.members.map((profile, i) => (
                      <img
                        key={i}
                        src={profile}
                        alt="Member"
                        className="rounded-circle me-2"
                        width="50"
                        height="50"
                      />
                    ))}
                  </div>
                  <Button
                    variant={
                      joined.includes(group.name) ? "secondary" : "primary"
                    }
                    className="mt-3"
                    onClick={() => handleJoin(group.name)}
                  >
                    {joined.includes(group.name) ? "Joined" : "Join"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Groups;
