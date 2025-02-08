import React, { useState } from "react";
import { Card, ListGroup, Form, Button } from "react-bootstrap";

// Fake Messages Data
const fakeMessages = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "/pfps/pfp_5.jpg",
    lastMessage: "Hey, how’s it going?",
    messages: [
      { sender: "John Doe", text: "Hey, how’s it going?" },
      { sender: "Me", text: "Pretty good! What about you?" },
      {
        sender: "John Doe",
        text: "Doing great, just working on a new project.",
      },
    ],
  },
  {
    id: 2,
    name: "Alice Smith",
    profilePic: "/pfps/pfp_2.jpg",
    lastMessage: "Are we meeting tomorrow?",
    messages: [
      { sender: "Alice Smith", text: "Are we meeting tomorrow?" },
      { sender: "Me", text: "Yes! Looking forward to it." },
    ],
  },
  {
    id: 3,
    name: "Michael Lee",
    profilePic: "/pfps/pfp_3.jpg",
    lastMessage: "Sent you the files!",
    messages: [
      { sender: "Michael Lee", text: "Sent you the files!" },
      { sender: "Me", text: "Thanks! I'll check them now." },
    ],
  },
];

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (selectedChat !== null && messageInput.trim() !== "") {
      const updatedMessages = [...fakeMessages];
      updatedMessages[selectedChat - 1].messages.push({
        sender: "Me",
        text: messageInput,
      });
      setMessageInput("");
    }
  };

  return (
    <div className="messages-container d-flex flex-row w-100 h-100 p-4">
      {/* Messages List Panel */}
      <div
        className="messages-list bg-dark text-white p-3 rounded h-100"
        style={{ width: "30%", minWidth: "250px" }}
      >
        <h4 className="mb-3">Messages</h4>
        <ListGroup>
          {fakeMessages.map((chat) => (
            <ListGroup.Item
              key={chat.id}
              className={`d-flex align-items-center bg-dark text-white cursor-pointer p-3 border-bottom ${
                selectedChat === chat.id ? "active" : ""
              }`}
              onClick={() => setSelectedChat(chat.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={chat.profilePic}
                alt={chat.name}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <strong>{chat.name}</strong>
                <p className="text-white-50 small mb-0">{chat.lastMessage}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Chat Window */}
      <div className="chat-container flex-grow-1 bg-dark text-white ms-3 p-3 rounded d-flex flex-column">
        {selectedChat !== null ? (
          <>
            {/* Chat Header */}
            <h5 className="mb-3">{fakeMessages[selectedChat - 1].name}</h5>

            {/* Messages Display */}
            <div className="chat-messages flex-grow-1 overflow-auto">
              {fakeMessages[selectedChat - 1].messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-bubble ${
                    msg.sender === "Me" ? "sent" : "received"
                  }`}
                >
                  <strong>{msg.sender}: </strong>
                  <span>{msg.text}</span>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <Form className="d-flex mt-3">
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="me-2"
              />
              <Button variant="primary" onClick={handleSendMessage}>
                Send
              </Button>
            </Form>
          </>
        ) : (
          <h5 className="text-center text-white">
            Select a conversation to view messages
          </h5>
        )}
      </div>
    </div>
  );
};

export default Messages;
