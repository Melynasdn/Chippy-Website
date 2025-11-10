import React from 'react';
import Navigation from '../navigation/Navigation';


const Layout = ({ children, currentPage, onNavigate }) => {
  
  return (
    <div>
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;