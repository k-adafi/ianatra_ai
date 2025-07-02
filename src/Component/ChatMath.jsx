import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/chatetude.css';
import { Paperclip, Send } from 'lucide-react';
import logo from '../assets/Logo/logo_long_bleu.png';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function ChatMath() {
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
    // Simulation de réponse - remplacer par un vrai appel API
    const mathResponses = {
      "équation": "Pour résoudre une équation du type ax² + bx + c = 0, utilisez la formule: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
      "pythagore": "Le théorème de Pythagore s'énonce: Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés. $$a^2 + b^2 = c^2$$",
      "dérivée": "La dérivée d'une fonction f(x) notée f'(x) représente son taux de variation. Par exemple, si f(x) = x², alors f'(x) = 2x.",
      "salutation" : "Bonjour, comment puis-je vous aider aujourd'hui ?"
    };
    
    // Simulation de délai réseau
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Trouve une réponse correspondante ou retourne une réponse par défaut
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

    // Ajout du message utilisateur
    const userMessage = { text: inputMessage, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Ajout d'un message de chargement
    setMessages(prev => [...prev, { text: "Réflexion...", sender: "bot" }]);

    try {
      // Génération de la réponse
      const botResponse = await generateBotResponse(inputMessage);
      
      // Remplacement du message de chargement par la vraie réponse
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
    <div className="chat-app-container">
      {/* <div className="chat-header">
        
      </div> */}
    
      <div className="chat-content">
        <div className="chat-messages" ref={messagesContainerRef}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="welcome-logo" />
          </div>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
            >
              <div className="message-content">
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
            <div className="suggestions-container">
              <h5>Questions suggérées:</h5>
              <div className="suggestions-grid">
                {suggestedQuestions.map((question, index) => (
                  <button 
                    key={index}
                    className="suggestion-btn"
                    onClick={() => {
                      setInputMessage(question);
                      document.querySelector('.chat-input input').focus();
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

      <div className="chat-footer">
        <form onSubmit={handleSendMessage} className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Posez votre question mathématique..."
            disabled={isLoading}
          />
          <button type="button" className="btn attachment-btn" disabled={isLoading}>
            <Paperclip />
          </button>
          <button 
            type="submit" 
            className="btn btn-primary send-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            ) : (
              <Send />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatMath;