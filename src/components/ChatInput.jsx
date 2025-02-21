import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput({ sendMessage }) {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText("");
    }
  };

  return (
    <div className="bg-gray-800 p-4 flex items-center border-t border-gray-700">
      {/* Language Selection Dropdown */}
      <select className="bg-gray-700 text-white p-2 rounded-md mr-2">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="ru">Russian</option>
        <option value="pt">Portuguese</option>
        <option value="tr">Turkish</option>
      </select>

      {/* Text Input */}
      <textarea
        className="flex-1 p-2 border rounded-lg bg-gray-700 text-white focus:outline-none"
        placeholder="Type your message here..."
        rows={1}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        className="ml-3 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
}
