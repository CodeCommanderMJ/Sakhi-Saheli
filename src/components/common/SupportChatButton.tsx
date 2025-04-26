import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const SupportChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-xl w-72 md:w-80 overflow-hidden animate-slide-up">
          <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Support Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-purple-700 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 h-80 bg-gray-50 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-purple-100 text-purple-800 rounded-lg p-3 max-w-[80%] ml-auto">
                Hello, how can we help you today?
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 mr-2">
                S
              </div>
              <div className="bg-white text-gray-800 rounded-lg p-3 shadow-sm">
                Hi there, we have counselors available to chat. What's on your mind?
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="ml-2 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 animate-bounce-subtle flex items-center justify-center"
          aria-label="Open support chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SupportChatButton;