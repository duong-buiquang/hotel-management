// File: src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-blue-600 text-white p-4 rounded mb-4">
        <h1 className="text-2xl font-bold">Welcome to the Hotel Booking App</h1>
      </header>
      <main className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Example card */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold">Luxury Hotel</h2>
          <p className="text-gray-600">
            A premium experience with modern amenities.
          </p>
        </div>
      </main>
      <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
