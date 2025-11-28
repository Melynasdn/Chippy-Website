import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Layout = ({ children, currentPage, onNavigate }) => {
  
  return (
    <div>
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;