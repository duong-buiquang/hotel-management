// File: /components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 p-4  text-[#222222] text-center">
      &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
    </footer>
  );
};

export default Footer;
