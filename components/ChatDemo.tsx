// components/ChatDemo.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot, User, RotateCcw } from "lucide-react";

// Normal bot (options only)
const conversationNormal = [
  { sender: "user", text: "Hi, I need help with my account." },
  { sender: "bot", text: "Please choose an option:\nA. Check Balance\nB. Reset Password\nC. Block Card\nD. Loan Inquiry\nE. Speak to Agent" },
  { sender: "user", text: "It's urgent, my account was hacked." },
  { sender: "bot", text: "❌ Invalid input. Please select A, B, C, D, or E only." },
  { sender: "user", text: "Okay, option B" },
  { sender: "bot", text: "Password reset link has been sent to your email." },
];

// Weezo bot (natural conversation)
const conversationWeezo = [
  { sender: "user", text: "Hi, I need help with my account." },
  { sender: "bot", text: "Of course. Can you tell me what issue you’re facing?" },
  { sender: "user", text: "It's urgent, my account was hacked." },
  { sender: "bot", text: "I see your account was recently hacked. I’ve locked it for your security. Let's walk you through recovery." },
  { sender: "user", text: "Wow, that was quick. Thank you!" },
  { sender: "bot", text: "✅ Your account is secured. Do you want me to guide you in setting up stronger authentication?" },
];

// Reusable chat window component
function ChatWindow({
  title,
  conversation,
  variant,
}: {
  title: string;
  conversation: { sender: string; text: string }[];
  variant: "normal" | "weezo";
}) {
  const [displayedMessages, setDisplayedMessages] = useState<
    { sender: string; text: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messageIndex >= conversation.length) return;

    const { sender, text } = conversation[messageIndex];

    setIsTyping(true);
    setCurrentMessage("");

    const typingDelay = sender === "bot" ? 2000 : 800;

    const delayTimeout = setTimeout(() => {
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        setCurrentMessage((prev) => prev + text[charIndex]);
        charIndex++;

        if (charIndex === text.length) {
          clearInterval(typeInterval);
          setDisplayedMessages((prev) => [...prev, { sender, text }]);
          setIsTyping(false);

          setTimeout(() => {
            setMessageIndex((prev) => prev + 1);
          }, 1000);
        }
      }, 40);
    }, typingDelay);

    return () => clearTimeout(delayTimeout);
  }, [messageIndex, conversation]);

  const resetChats = () => {
    setDisplayedMessages([]);
    setCurrentMessage("");
    setIsTyping(false);
    setMessageIndex(0);
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg h-[500px] flex flex-col ">
      {/* Title with Animated Bot Icon */}
      <h3 className="text-xl font-semibold mb-4 text-left flex items-center gap-2">
        {variant === "normal" ? (
          <>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bot className="w-5 h-5 text-red-400" />
            </motion.div>
            {title}
          </>
        ) : (
          <>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bot className="w-5 h-5 text-green-400" />
            </motion.div>
            {title}
          </>
        )}
      </h3>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
        {displayedMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                <Bot
                  className={`w-4 h-4 ${
                    variant === "weezo" ? "text-green-400" : "text-red-400"
                  }`}
                />
              </div>
            )}

            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm text-left whitespace-pre-line ${
                msg.sender === "user"
                  ? "bg-gray-700 text-gray-200 rounded-br-none"
                  : "bg-gray-700 text-gray-300 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                <User className="w-4 h-4 text-blue-400" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div
            className={`flex items-end gap-2 ${
              conversation[messageIndex]?.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {conversation[messageIndex]?.sender !== "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                <Bot
                  className={`w-4 h-4 ${
                    variant === "weezo" ? "text-green-400" : "text-red-400"
                  }`}
                />
              </div>
            )}

            <div className="px-4 py-2 rounded-2xl max-w-xs bg-gray-700 flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>

            {conversation[messageIndex]?.sender === "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                <User className="w-4 h-4 text-blue-400" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reset Button (icon only) */}
      <div className="text-center mt-4">
        <button
          onClick={resetChats}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// Main Chat Demo Section
export default function ChatDemo() {
  return (
    <section 
    id="chatbot"
    className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Compare Chatbots Side by Side
        </motion.h2>

        {/* Tagline with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          A rule-based chatbot vs. Weezo AI’s intelligent
          assistant.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChatWindow
            title="Normal Chatbot"
            conversation={conversationNormal}
            variant="normal"
          />
          <ChatWindow
            title="Weezo AI Powered Chatbot"
            conversation={conversationWeezo}
            variant="weezo"
          />
        </div>
      </div>
    </section>
  );
}
