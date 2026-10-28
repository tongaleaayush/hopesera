import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';
import { SUGGESTED_CHAT_QUESTIONS } from '../data/hopeseraData';
import { getVerifiedAssistantResponse } from '../utils/hopeseraAssistant';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

const INITIAL_GREETING =
  "Hello! I'm the Hope Assist, designed to help you learn about Hope Sera Pvt. Ltd., including our verified company information, product categories, Pune locations, and contact details. What would you like to know?";

function renderFormattedBotText(text: string): React.ReactNode {
  const lines = text.replace(/\r\n/g, '\n').split('\n');

  const formatInline = (line: string, keyPrefix: string) => {
    // Parse markdown links [Label](URL) and bold **text**
    const parts: React.ReactNode[] = [];
    const tokenRegex = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*(.+?)\*\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let idx = 0;

    while ((match = tokenRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      if (match[2] && match[3]) {
        parts.push(
          <a
            key={`${keyPrefix}-link-${idx++}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0A6EBD] underline hover:text-[#004C8C]"
          >
            {match[2]}
          </a>
        );
      } else if (match[4]) {
        parts.push(
          <strong key={`${keyPrefix}-bold-${idx++}`} className="font-semibold text-slate-900">
            {match[4]}
          </strong>
        );
      }
      lastIndex = tokenRegex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }

    return parts.length > 0 ? parts : line;
  };

  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1" />;
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={i} className="flex items-start gap-2 pl-1">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A6EBD]" />
              <span>{formatInline(trimmed.slice(2), `l-${i}`)}</span>
            </div>
          );
        }
        return <p key={i}>{formatInline(trimmed, `p-${i}`)}</p>;
      })}
    </div>
  );
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greeting', sender: 'bot', text: INITIAL_GREETING },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages, isSending]);

  const handleSendMessage = async (rawText: string) => {
    const userText = rawText.trim();
    if (!userText || isSending) return;

    setIsSending(true);
    setInputValue('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
    };
    setMessages((prev) => [...prev, userMsg]);

    // Fast, natural client-side response with zero server or cloud API dependency
    setTimeout(() => {
      try {
        const botReply = getVerifiedAssistantResponse(userText);
        setMessages((prev) => [
          ...prev,
          { id: `bot-${Date.now()}`, sender: 'bot', text: botReply },
        ]);

        setChatHistory((prev) => {
          const updated: { role: 'user' | 'model'; text: string }[] = [
            ...prev,
            { role: 'user', text: userText },
            { role: 'model', text: botReply },
          ];
          return updated.slice(-8);
        });
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-err-${Date.now()}`,
            sender: 'bot',
            text:
              "I'm here to assist with verified information about Hope Sera Pvt. Ltd. You can also reach our team directly at info@hopesera.com.",
          },
        ]);
      } finally {
        setIsSending(false);
      }
    }, 280);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="hopeseraChatWindow"
            role="region"
            aria-label="Hope Assist Chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="mb-3 flex h-[480px] max-h-[78vh] w-[calc(100vw-2rem)] sm:w-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#004C8C] to-[#0A6EBD] px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-xs">
                  <img
                    src="/images/ailogo.png"
                    alt="Hope Assist"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight text-white">
                    Hope Assist
                  </h3>
                  <p className="text-[11px] text-sky-100">
                    Verified Company & Product Information
                  </p>
                </div>
              </div>
              <button
                type="button"
                id="hopeseraChatClose"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat window"
                className="rounded-lg p-1.5 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Log */}
            <div
              id="hopeseraChatMessages"
              role="log"
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto bg-[#F8FAFC] p-4"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-[#0A6EBD] text-white text-xs sm:text-sm'
                        : 'border border-slate-200/90 bg-white text-slate-700 shadow-2xs'
                    }`}
                  >
                    {msg.sender === 'user'
                      ? msg.text
                      : renderFormattedBotText(msg.text)}
                  </div>
                </div>
              ))}

              {/* Quick Suggested Questions */}
              {messages.length === 1 && (
                <div className="pt-1">
                  <div className="mb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Suggested Inquiries
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_CHAT_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSendMessage(q)}
                        disabled={isSending}
                        className="rounded-lg border border-[#0A6EBD]/25 bg-white px-2.5 py-1.5 text-left text-xs font-medium text-[#004C8C] transition-colors hover:bg-[#EBF4FC] disabled:opacity-50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isSending && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-500">
                    Consulting verified knowledge base...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              id="hopeseraChatForm"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
            >
              <input
                ref={inputRef}
                type="text"
                id="hopeseraChatInput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about products, locations, contacts..."
                aria-label="Your question"
                maxLength={1000}
                disabled={isSending}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A6EBD] focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                id="hopeseraChatSend"
                aria-label="Send message"
                disabled={isSending || !inputValue.trim()}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0A6EBD] text-white transition-colors hover:bg-[#004C8C] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-[#0A6EBD]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        type="button"
        id="hopeseraChatFab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Hope Assist"
        aria-expanded={isOpen}
        className="group flex items-center gap-2 rounded-full bg-[#004C8C] px-3.5 py-2.5 sm:px-4 sm:py-3 text-white shadow-lg transition-all duration-200 hover:bg-[#0A6EBD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6EBD] cursor-pointer"
      >
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          {isOpen ? 'Close Assistant' : 'Hope Assist'}
        </span>
      </button>
    </div>
  );
};
