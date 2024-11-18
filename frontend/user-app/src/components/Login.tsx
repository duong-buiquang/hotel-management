import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signIn } from '../services/userService'; // Your service function for sign-in

interface LoginProps {
  onClose: () => void;
  onLoginSuccess: (token: string) => void; // Passes token on successful login
}

const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signIn({ phoneNumber, password });
      localStorage.setItem('authToken', response.token); // Save token securely
      toast.success('Login successful!');
      onLoginSuccess(response.token); // Notify parent component
      onClose(); // Close the modal
    } catch (error: any) {
      setErrorMessage(error.message || 'Login failed. Please try again.');
      toast.error(error.message || 'Login failed.');
    }
  };

  return (
    <div>
      <h2 className="text-center text-lg font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
