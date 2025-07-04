import React, { useState, useRef, useEffect } from 'react';
import '../style/chatetude.css';
import { Paperclip, Send, ArrowLeft, AudioLines } from 'lucide-react';
// import logo from '../assets/Logo/logo_long_bleu.png';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useNavigate } from 'react-router-dom';

function ChatMath() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { 
      text: "Bonjour! Je suis votre assistant en mathématiques. Posez-moi vos questions sur les équations, la géométrie, l'algèbre ou tout autre sujet mathématique.", 
      sender: "bot" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [suggestedQuestions] = useState([
    "Comment résoudre une équation du second degré?",
    "Qu'est-ce que le théorème de Pythagore?",
    "Expliquez-moi les fonctions trigonométriques",
    "Comment calculer une dérivée?",
    "Bonjour"
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateBotResponse = async (userMessage) => {
    const mathResponses = {
      "équation": "Pour résoudre une équation du type ax² + bx + c = 0, utilisez la formule: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
      "pythagore": "Le théorème de Pythagore s'énonce: Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés. $$a^2 + b^2 = c^2$$",
      "dérivée": "La dérivée d'une fonction f(x) notée f'(x) représente son taux de variation. Par exemple, si f(x) = x², alors f'(x) = 2x.",
      "salutation" : "Bonjour, comment puis-je vous aider aujourd'hui ?"
    };
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerMsg = userMessage.toLowerCase();
    if (lowerMsg.includes("équation")) return mathResponses.équation;
    if (lowerMsg.includes("pythagore")) return mathResponses.pythagore;
    if (lowerMsg.includes("dérivée")) return mathResponses.dérivée;
    if (lowerMsg.includes("salutation")) return mathResponses.salutation;
    
    return "Je suis un chatbot spécialisé en mathématiques. Pour une meilleure réponse, précisez votre question avec des termes mathématiques comme 'équation', 'théorème', 'fonction', etc.";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "" || isLoading) return;

    const userMessage = { text: inputMessage, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    setMessages(prev => [...prev, { text: "Réflexion...", sender: "bot" }]);

    try {
      const botResponse = await generateBotResponse(inputMessage);
      setMessages(prev => [...prev.slice(0, -1), { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Erreur:", error);
      setMessages(prev => [...prev.slice(0, -1), { 
        text: "Désolé, je n'ai pas pu traiter votre demande mathématique. Pouvez-vous reformuler?", 
        sender: "bot" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="math-chat-container">
      <div className="math-chat-header">
        <button className="math-chat-back-btn" onClick={() => navigate('/modules')}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="math-chat-title">Mathématiques</h2>
      </div>
    
      <div className="math-chat-content">
        <div className="math-chat-messages" ref={messagesContainerRef}>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`math-chat-message ${msg.sender === "user" ? "math-chat-user-message" : "math-chat-bot-message"}`}
            >
              <div className="math-chat-message-content">
                {msg.text.includes('$$') ? (
                  <BlockMath math={msg.text.replace(/^\$\$(.*)\$\$$/, '$1')} />
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          
          {messages.length === 1 && (
            <div className="math-chat-suggestions">
              <h5>Questions suggérées:</h5>
              <div className="math-chat-suggestions-grid">
                {suggestedQuestions.map((question, index) => (
                  <button 
                    key={index}
                    className="math-chat-suggestion-btn"
                    onClick={() => {
                      setInputMessage(question);
                      document.querySelector('.math-chat-input input').focus();
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="math-chat-footer">
        <form onSubmit={handleSendMessage} className="math-chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Posez votre question mathématique..."
            disabled={isLoading}
          />
          <button type="button" className="btn ms-2">
            <Paperclip />
          </button>
          <button 
            type="submit" 
            className="math-chat-send-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="math-chat-spinner" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            ) : (
              <Send />
            )}
          </button>
          <button type="button" className="btn ms-2">
            <AudioLines />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatMath;