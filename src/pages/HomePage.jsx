import React from 'react';
import '../style/pages/homePage.css';
import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
import { useEffect, useState } from 'react';
import ChippyLogo from '../assets/logo/ChippyLogo.png';
import champignon from '../assets/animation/champignon.png';
import olive from '../assets/animation/olive.png';
import tomate from '../assets/animation/tomate.png';
import fromage from '../assets/animation/fromage.png';  
import poivron from '../assets/animation/poivron.png';

const HomePage = ({ onNavigate }) => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  // Tableau des images d'ingrédients
  const ingredients = [fromage, tomate, olive, poivron, champignon];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div className={`homepage-container ${isDark ? "dark" : "light"}`}>
  <div className="hero-section">
    <div className="hero-background"></div>

    <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
      <div className="pizza-icon-wrapper">
        <div className="logo">
          <img src={ChippyLogo} alt="" />
        </div>
      </div>

      <h1 className="hero-title">
        <span className="hero-title-line">Chippy </span>
        <span className="hero-title-line hero-title-accent">   PIZZA</span>
      </h1>

      <h2 className="hero-subtitle-main">{t.heroTitle}</h2>
      <p className="hero-description">{t.heroSubtitle}</p>

      <button className="hero-cta" onClick={() => onNavigate('menu')}>
        {t.viewMenu}
      </button>
    </div>

    <div className="floating-decorations">
      {ingredients.map((ingredient, i) => (
        <img
          key={i}
          src={ingredient}
          alt={`ingredient-${i}`}
          className="floating-ingredient"
          style={{
            left: `${15 + i * 15}%`,
            top: `${25 + (i % 2) * 40}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default HomePage;