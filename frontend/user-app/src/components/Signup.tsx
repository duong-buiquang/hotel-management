import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signUp } from '../services/userService'; // Adjust the path as needed for your service

interface SignupProps {
  onClose: () => void;
  onSignUpSuccess: (token: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onClose, onSignUpSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await signUp({ phoneNumber, password });
      localStorage.setItem('authToken', response.token); // Save token securely
      toast.success('Signup successful!');
      onSignUpSuccess(response.token); // Notify parent component of successful signup
      onClose(); // Close the modal
    } catch (error: any) {
      setErrorMessage(error.message || 'Signup failed. Please try again.');
      toast.error(error.message || 'Signup failed.');
    }
  };

  return (
    <div>
      <h2 className="text-center text-lg font-bold mb-4">Sign Up</h2>
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
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
