import React, { useState } from "react";
import axios from "axios";
import "./Publisher.css"; // Import the CSS file

const Publisher: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSendMessage = async () => {
    setStatus("Sending message...");
    try {
      const response = await axios.post("http://localhost:5000/send", {
        message,
      });
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setMessage(""); // Clear the input after successful send
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Send Message As Publisher</h1>
      <div className="form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="input"
        />
        <button onClick={handleSendMessage} className="button">
          Send Message
        </button>
      </div>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default Publisher;
