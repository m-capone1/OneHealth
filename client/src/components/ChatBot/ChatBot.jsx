import React, { useState } from "react";
import "./ChatBot.scss";

const ChatBot = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Brown"];

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { sender: "patient", text: currentMessage, doctor:selectedDoctor }]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chatbot">
      <div>

      <div className="chatbot__doctor-select">
        <label htmlFor="doctor" className="chatbot__label">
          To:{" "}
        </label>
        <select
          id="doctor"
          className="chatbot__dropdown"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="" disabled>
            Select a doctor
          </option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
      </div>
      <div className="chatbot__input-area">
        <textarea
        cols={50}
        rows={20}
          type="text"
          className="chatbot__input"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="chatbot__send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      </div>
      

      <div className="chatbot__screen">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot__message chatbot__message--${message.sender}`}
          >
            <span>{message.doctor}</span><span>{message.text}</span>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChatBot;
