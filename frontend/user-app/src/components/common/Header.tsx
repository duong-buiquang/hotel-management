import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Avatar, IconButton } from '@mui/material';
import UserMenu from '../UserMenu';
import CustomAuthModal from '../CustomAuthModal';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Check for existing token on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle successful authentication (login/signup)
  const handleAuthSuccess = (token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token); // Save token to localStorage
    toast.success('Authentication successful!');
    setIsModalOpen(false); // Close the modal
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setAnchorEl(null); // Close the menu if open
    toast.info('You have signed out.');
  };

  // Menu handling functions
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="p-4 mb-4 border-b w-screen shadow-md fixed top-0 z-20 bg-white">
      <div className="container flex justify-between mx-auto items-center">
        <Link className="text-xl font-bold" to="/">
          MyApp
        </Link>
        <nav>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {/* Avatar that triggers the user menu */}
              <IconButton onClick={handleMenuClick} size="small">
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>{' '}
                {/* Replace 'U' with dynamic content */}
              </IconButton>
              {/* UserMenu Component */}
              <UserMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                onLogout={handleLogout} // Pass the logout handler
              />
            </div>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Sign In / Sign Up
            </button>
          )}
        </nav>
        <CustomAuthModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      </div>
    </header>
  );
};

export default Header;
