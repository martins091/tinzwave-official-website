"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles, User } from "lucide-react";
import { faqData, findAnswer, fallbackAnswer, quickReplies } from "@/lib/chatbot-data";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const WHATSAPP_URL = "https://wa.me/2349161052706";

const initialMessage: Message = {
  id: "welcome",
  sender: "bot",
  text:
    "Hi! I'm the Tinzwave assistant 🤖 Ask me anything about our courses, services, pricing, or how to reach us.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const respond = (text: string) => {
    const match = findAnswer(text);
    const answerText = match ? match.answer : fallbackAnswer;

    setTyping(true);
    const delay = 350 + Math.min(answerText.length * 4, 700);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, sender: "bot", text: answerText },
      ]);
    }, delay);
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, sender: "user", text: trimmed }]);
    setInput("");
    respond(trimmed);
  };

  const handleQuickReply = (id: string) => {
    const entry = faqData.find((f) => f.id === id);
    if (!entry) return;
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, sender: "user", text: entry.question },
    ]);
    respond(entry.question);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-gradient-to-br from-[#03005F] to-indigo-600 text-white shadow-2xl shadow-[#03005F]/40 flex items-center justify-center border border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-xl"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[60] w-[92vw] max-w-sm h-[70vh] max-h-[560px] rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl shadow-[#03005F]/30 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="relative px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[#03005F]/40 via-indigo-900/30 to-black">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  Tinzwave Assistant
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                </p>
                <p className="text-[11px] text-white/40 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Online — instant answers
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-gradient-to-br from-[#03005F] to-indigo-600 text-white rounded-br-sm"
                      : "bg-white/5 border border-white/10 text-white/80 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            {!typing && messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuickReply(q.id)}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[11px] text-white/70 font-mono hover:bg-white/10 hover:border-white/30 hover:text-white transition"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {!typing && messages.length > 2 && messages[messages.length - 1]?.sender === "bot" && (
              <div className="flex justify-start">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-white/30 hover:text-white/60 transition underline underline-offset-2"
                >
                  Prefer a human? Chat with us on WhatsApp →
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, services..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:border-[#03005F]/50 focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-indigo-500/30 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
