import { useState, useRef, useEffect } from 'react';
import { Send, Phone, Video, ChevronDown } from 'lucide-react';
import { MOCK_THERAPISTS } from '../utils/mockData';
import './ChatBotPage.css';

interface Message {
  id: string;
  sender: 'user' | 'therapist';
  text: string;
  timestamp: Date;
  therapistId?: string;
}

export const ChatBotPage: React.FC = () => {
  const [selectedTherapistId, setSelectedTherapistId] = useState<string>(MOCK_THERAPISTS[0].id);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'therapist',
      text: 'Hello! How can I help you today?',
      timestamp: new Date(),
      therapistId: selectedTherapistId,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showTherapistDropdown, setShowTherapistDropdown] = useState(false);

  const selectedTherapist = MOCK_THERAPISTS.find((t) => t.id === selectedTherapistId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: (Date.now()).toString(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate therapist response after a delay
    setTimeout(() => {
      const therapistMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'therapist',
        text: generateTherapistResponse(),
        timestamp: new Date(),
        therapistId: selectedTherapistId,
      };
      setMessages((prev) => [...prev, therapistMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateTherapistResponse = (): string => {
    const responses = [
      'That\'s an important point. Can you tell me more about how you\'re feeling?',
      'I understand. Let\'s explore that further. What do you think is contributing to this?',
      'Thank you for sharing that with me. How has this been affecting your daily life?',
      'I appreciate your openness. Have you tried any coping strategies for this?',
      'That\'s a common experience. Let\'s work together to find solutions that work for you.',
      'I\'m here to support you. Would you like to discuss some techniques to help manage this?',
      'Thank you for trusting me with this. Remember, taking small steps is progress.',
      'How are you feeling about this right now?',
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleTherapistChange = (therapistId: string) => {
    setSelectedTherapistId(therapistId);
    setShowTherapistDropdown(false);
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'therapist',
        text: `Hello! I'm ${MOCK_THERAPISTS.find((t) => t.id === therapistId)?.name}. How can I assist you today?`,
        timestamp: new Date(),
        therapistId,
      },
    ]);
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        {/* Sidebar - Therapist Selection */}
        <div className="chatbot-sidebar">
          <div className="sidebar-header">
            <h2>Therapists</h2>
          </div>

          <div className="therapist-selector">
            <button
              className="therapist-selector-btn"
              onClick={() => setShowTherapistDropdown(!showTherapistDropdown)}
            >
              <div className="selected-therapist">
                <img src={selectedTherapist?.image} alt={selectedTherapist?.name} />
                <div className="therapist-info-compact">
                  <span className="therapist-name">{selectedTherapist?.name}</span>
                  <span className="therapist-spec">{selectedTherapist?.specialization[0]}</span>
                </div>
              </div>
              <ChevronDown size={20} />
            </button>

            {showTherapistDropdown && (
              <div className="therapist-dropdown">
                {MOCK_THERAPISTS.map((therapist) => (
                  <button
                    key={therapist.id}
                    className={`dropdown-item ${selectedTherapistId === therapist.id ? 'active' : ''}`}
                    onClick={() => handleTherapistChange(therapist.id)}
                  >
                    <img src={therapist.image} alt={therapist.name} />
                    <div className="dropdown-item-info">
                      <span className="item-name">{therapist.name}</span>
                      <span className="item-spec">{therapist.specialization.join(', ')}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Therapist Profile */}
          {selectedTherapist && (
            <div className="therapist-profile-card">
              <img src={selectedTherapist.image} alt={selectedTherapist.name} className="profile-img" />
              <h3>{selectedTherapist.name}</h3>
              <p className="credentials">{selectedTherapist.credentials}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-label">Experience</span>
                  <span className="stat-value">{selectedTherapist.experience} yrs</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Rating</span>
                  <span className="stat-value">{selectedTherapist.rating.toFixed(1)}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Session</span>
                  <span className="stat-value">৳{selectedTherapist.sessionPrice}</span>
                </div>
              </div>
              <p className="bio">{selectedTherapist.bio}</p>

              <div className="action-buttons">
                <button className="action-btn video-call">
                  <Video size={18} />
                  Video Call
                </button>
                <button className="action-btn voice-call">
                  <Phone size={18} />
                  Voice Call
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Chat Area */}
        <div className="chatbot-main">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="header-left">
              {selectedTherapist && (
                <>
                  <img src={selectedTherapist.image} alt={selectedTherapist.name} className="header-avatar" />
                  <div className="header-info">
                    <h2>{selectedTherapist.name}</h2>
                    <p className="specialization">{selectedTherapist.specialization.join(', ')}</p>
                  </div>
                </>
              )}
            </div>
            <div className="header-actions">
              <button className="icon-btn">
                <Phone size={20} />
              </button>
              <button className="icon-btn">
                <Video size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message message-${message.sender}`}>
                {message.sender === 'therapist' && selectedTherapist && (
                  <img src={selectedTherapist.image} alt="Therapist" className="message-avatar" />
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message message-therapist">
                {selectedTherapist && <img src={selectedTherapist.image} alt="Therapist" className="message-avatar" />}
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-area">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Type your message here..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="chat-input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="send-btn"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="disclaimer">
              This chat is for support and guidance. For emergencies, please contact emergency services at 999.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
