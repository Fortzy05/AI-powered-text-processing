import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ThemeToggle from "./ThemeToggle";

export default function ChatLayout() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const newMessage = {
      text,
      type: "user",
      detectedLang: "",
      isLoading: true,
    };
    setMessages([...messages, newMessage]);

    // Simulate API loading effect
    setTimeout(() => {
      newMessage.isLoading = false;
      newMessage.detectedLang = "English"; // Placeholder for now
      setMessages((prev) => [...prev, newMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">AI-Powered Text Processing</h1>
        <ThemeToggle />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>

      {/* Input Field */}
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
