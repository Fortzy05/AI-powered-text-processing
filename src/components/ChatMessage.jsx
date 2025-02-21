import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function ChatMessage({
  text,
  type,
  detectedLang,
  translation,
  isLoading,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg shadow-md w-fit ${
        type === "user"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-800 text-white self-start"
      }`}
    >
      <p>{text}</p>

      {/* Detected Language */}
      {detectedLang && (
        <p className="text-sm text-gray-400 mt-1">
          Detected language: {detectedLang}
        </p>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center mt-2">
          <FaSpinner className="animate-spin text-gray-400" />
        </div>
      )}

      {/* Translation (if available) */}
      {translation && (
        <div className="mt-2 p-2 bg-gray-700 rounded">
          <p className="text-sm">Translation: {translation}</p>
        </div>
      )}
    </motion.div>
  );
}
