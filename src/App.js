
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';


import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ContactPage from './pages/ContactPages.jsx';
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
            {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
            {currentPage === 'menu' && <MenuPage />}
            {currentPage === 'contact' && <ContactPage />}
          </Layout>
      </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}