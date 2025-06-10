import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/chatetude.css';
import { Paperclip, Send } from 'lucide-react';
import logo from '../assets/Logo/logo_long_bleu.png';
import { 
  BookOpen, 
  Globe2, 
  Landmark, 
  Scale, 
  Atom, 
  Leaf, 
  Brain, 
  Languages, 
  BookText, 
  Backpack,
  CircleArrowLeft,
  SquareRadical
} from 'lucide-react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ChatPhysique() {


  const [messages, setMessages] = useState([
    { text: "Matière physique", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // Masquer le welcome après le premier message utilisateur
    if (messages.length > 1 && messages.some(msg => msg.sender === "user")) {
      setShowWelcome(false);
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    setMessages([...messages, { text: inputMessage, sender: "user" }]);
    setInputMessage("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Je réfléchis à votre question...", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {showWelcome && (
          <div className="welcome-container">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="welcome-logo" />
            </div>
            <div className="welcome-message">
              {messages[0].text}
            </div>
          </div>
        )}
        
        {messages.slice(1).map((msg, index) => (
          <div 
            key={index + 1} 
            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Tapez votre message..."
        />
        <button type="button" className="btn ms-2">
          <Paperclip />
        </button>
        <button type="submit" className="btn btn-primary ms-2">
          <Send/>
        </button>
      </form>
    </div>
  );
}

export default ChatPhysique;