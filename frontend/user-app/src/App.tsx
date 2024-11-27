import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HotelDetails from './components/HotelDetails';
import { PersonalInfo } from './pages/PersonalInfo';
import Payment from './pages/Payment';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container m-auto mt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="rooms/:hotelId" element={<HotelDetails />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/payment" element={<Payment />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
