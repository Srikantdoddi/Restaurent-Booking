import React, { useState } from 'react';
import { BsChatDotsFill } from 'react-icons/bs';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatType, setChatType] = useState('General');
  const [messages, setMessages] = useState({
    General: [{ sender: 'bot', text: 'Hello! 👋 How can we assist you today?' }],
    Reservation: [{ sender: 'bot', text: 'Need help booking a table? Let me guide you!' }]
  });
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const updatedMessages = { ...messages };
    updatedMessages[chatType].push(userMessage);
    setMessages(updatedMessages);

    setTimeout(() => {
      const botReply = {
        sender: 'bot',
        text: chatType === 'General'
          ? "Thanks for reaching out! We'll get back to you shortly."
          : 'We have received your reservation query. Someone will assist you soon.'
      };
      const updated = { ...updatedMessages };
      updated[chatType].push(botReply);
      setMessages(updated);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col">
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h4 className="font-bold text-red-700">Chat with Us</h4>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">✖️</button>
          </div>

          {/* Chat Type Selector */}
          <div className="px-4 pt-2 pb-1">
            <select
              className="w-full border rounded p-2 text-sm text-red-700"
              value={chatType}
              onChange={(e) => setChatType(e.target.value)}
            >
              <option value="General">General Inquiry</option>
              <option value="Reservation">Reservation Help</option>
            </select>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
            {messages[chatType].map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-red-100 self-end ml-auto' : 'bg-gray-100 self-start mr-auto'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 transition duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-700 text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition duration-300"
        >
          <BsChatDotsFill size={24} />
        </button>
      )}
    </div>
  );
};

export default Chat;
