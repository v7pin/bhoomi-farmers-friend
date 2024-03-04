// Chatbot.jsx

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComment, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { CSSTransition } from 'react-transition-group';
import TypingIndicator from './TypingIndicator';
import sendUserInputToBackend from './sendUserInputToBackend';
import './Chatbot.css'

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const messagesContainerRef = useRef(null);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const container = messagesContainerRef.current;

    const handleScroll = () => {
      setIsScrolledUp(container.scrollTop > 0);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [messagesContainerRef]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, type: 'user' },
    ]);

    setIsBotTyping(true);

    // Send user input to the backend
    const generatedText = await sendUserInputToBackend(inputValue, selectedLanguage);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: generatedText, type: 'bot' },
    ]);

    setInputValue('');
    setIsBotTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatInterface = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames="chat-interface"
        unmountOnExit
      >
        <div className="fixed bottom-4 right-4 w-96 bg-gray-900 text-white rounded-lg shadow-lg">
          <div
            ref={messagesContainerRef}
            className={`h-96 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 p-4 rounded-t-lg ${
              isScrolledUp ? 'top-bar-visible' : ''
            }`}
          >
            <div className="flex items-center mb-4">
              <div
                onClick={toggleChatInterface}
                className="cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-gray-300" />
              </div>
              <div className="flex-1 ml-4">Chatbot</div>
              <div>
                <label htmlFor="language" className="text-gray-300 mr-2">Language:</label>
                <select
                  id="language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="border-none bg-gray-800 text-white p-1 rounded-md text-xs"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                </select>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-green-500 text-white self-start'
                    : 'bg-gray-700 text-white self-end'
                }`}
              >
                {message.text} {message.type === 'bot' && <span className="text-gray-300">(bot)</span>}
              </div>
            ))}
            {isBotTyping && <TypingIndicator />}
          </div>
          <div
            className="p-4 flex items-center rounded-b-lg"
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border-none focus:outline-none p-2 rounded-full bg-gray-800 text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </CSSTransition>
      <div
        onClick={toggleChatInterface}
        className={`fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${
          isVisible ? 'hidden' : ''
        }`}
      >
        <FontAwesomeIcon icon={faComment} />
      </div>
    </div>
  );
};

export default Chatbot;
