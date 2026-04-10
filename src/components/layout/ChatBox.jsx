import React, { useState, useRef, useEffect } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputValue("");

    // Bot response logic
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        botResponse = "Hi there! Welcome to Ocean Technologies. We develop advanced software and control systems designed for the extreme challenges of the marine environment. How can we assist with your marine project?";
      } else if (lowerInput.includes('what is an auv')) {
        botResponse = "An AUV (Autonomous Underwater Vehicle) is a programmable, robotic vehicle that, depending on its design, can drift, drive, or glide through the ocean without real-time control by human operators. They are widely used for deep-sea mapping and research.";
      } else if (lowerInput.includes('help me find a product')) {
        botResponse = "I can help with that! Are you looking for solutions related to Data Analytics, Robotics, Environmental Monitoring, or Energy Assessment? You can also use the Search Bar above our product grid.";
      } else if (lowerInput.includes('contact support')) {
        botResponse = "You can reach our support team directly at support@oceantech.io or call us at +1 (555) 019-8432. We offer 24/7 technical assistance.";
      } else {
        botResponse = "Thanks for your message! Our team is currently reviewing it. For immediate assistance, please use our contact form or email us at contact@oceantech.io.";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const handleQuickReply = (replyText) => {
    setInputValue(replyText);
    // Simulate form submission
    handleSendMessage({ preventDefault: () => {}, target: { value: replyText } }, replyText);
  };

  // Helper method explicitly taking the string
  const handleSendMessageRaw = (userMessage) => {
    if (!userMessage.trim()) return;
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        botResponse = "Hi there! Welcome to Ocean Technologies. We develop advanced software and control systems designed for the extreme challenges of the marine environment. How can we assist with your marine project?";
      } else if (lowerInput.includes('auv')) {
        botResponse = "An AUV (Autonomous Underwater Vehicle) is a programmable, robotic submarine used for deep-sea mapping and research without real-time human operators.";
      } else if (lowerInput.includes('find a product')) {
        botResponse = "I can help with that! Are you looking for solutions related to Data Analytics, Robotics, Environmental Monitoring, or Energy Assessment?";
      } else if (lowerInput.includes('contact support')) {
        botResponse = "You can reach our support team directly at support@oceantech.io or call us at +1 (555) 019-8432.";
      } else {
        botResponse = "Thanks! Our team is reviewing this. For immediate assistance, email contact@oceantech.io.";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chat-window card">
          <div className="chat-header">
            <div className="chat-header-title">
              <span className="chat-status-dot"></span>
              OceanTech Assistant
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-container ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.isBot && <div className="chat-avatar">OT</div>}
                <div className={`chat-bubble ${msg.isBot ? 'bot-bubble' : 'user-bubble'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length < 3 && (
            <div className="chat-quick-replies">
              <button onClick={() => handleSendMessageRaw("Help me find a product")} className="quick-reply-chip">🔍 Find a product</button>
              <button onClick={() => handleSendMessageRaw("What is an AUV?")} className="quick-reply-chip">🤖 What is an AUV?</button>
              <button onClick={() => handleSendMessageRaw("Contact support")} className="quick-reply-chip">☎️ Contact support</button>
            </div>
          )}

          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
