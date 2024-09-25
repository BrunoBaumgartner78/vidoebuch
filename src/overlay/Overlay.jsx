// src/components/ChatbotOverlay.jsx
import React from 'react';
import './overlay.css';
import Bot from '../chatbot/Chatbot';

const ChatbotOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">Schließen</button>
        <Bot /> {/* Der Chatbot wird hier eingebettet */}
      </div>
    </div>
  );
};

export default ChatbotOverlay;
