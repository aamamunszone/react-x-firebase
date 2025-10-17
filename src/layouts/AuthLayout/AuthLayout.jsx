import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="flex-1 py-5">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
