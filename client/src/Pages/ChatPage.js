import React, { useState, useEffect } from 'react';
import "../App.css";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const initialMessages = [
      { id: 1, sender: 'bot', text: 'Hello! How can I assist you today?' },
      { id: 2, sender: 'user', text: 'What is the nutritional value of an apple?' },
      { id: 3, sender: 'bot', text: 'An apple is rich in fiber and vitamin C. It is also low in calories.' }
    ];
    setMessages(initialMessages);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { id: messages.length + 1, sender: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');
      setTimeout(() => {
        const botResponse = { id: messages.length + 2, sender: 'bot', text: 'I will get back to you on that!' };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
