import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login'; // Ensure correct import path
import Signup from './Signup'; // Ensure correct import path

interface CustomAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (token: string) => void; // Unified function for handling both login and signup success
}

const CustomAuthModal: React.FC<CustomAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess
}) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup views

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 absolute top-2 right-2"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-6 border-b border-gray-300 pb-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 transition-colors duration-300 ${
                  isLogin
                    ? 'bg-blue-500 text-white rounded'
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 transition-colors duration-300 ${
                  !isLogin
                    ? 'bg-blue-500 text-white rounded'
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Render Login or Signup */}
            {isLogin ? (
              <Login onClose={onClose} onLoginSuccess={onAuthSuccess} />
            ) : (
              <Signup onClose={onClose} onSignUpSuccess={onAuthSuccess} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomAuthModal;
