import '../style/pages/menuPage.css';
import React from 'react';

import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
import menuData from '../constants/menuData';
import PizzaCard from '../components/PizzaCard';
import cannete from "../assets/drinks/canette-removebg-preview.png"
import bouteille from "../assets/drinks/bouteille-removebg-preview.png"

const MenuPage = () => {
  const { isDark } = useTheme();
  const { language, t } = useLanguage();
  
  return (
    <div className={`menu-page ${isDark ? 'dark' : 'light'}`}>
      <div className="menu-container">
        <h1 className={`menu-title ${isDark ? 'dark' : 'light'}`}>
          {t.menu}
        </h1>
        
        <section className="menu-section">
          <h2 className={`section-title ${isDark ? 'dark' : 'light'}`}>
            {t.classicPizzas}
          </h2>
          <div className="pizza-grid">
            {menuData.classic.map((pizza, idx) => (
              <PizzaCard key={idx} pizza={pizza} />
            ))}
          </div>
        </section>
        
        <section className="menu-section">
          <h2 className={`section-title ${isDark ? 'dark' : 'light'}`}>
            {t.gourmetPizzas}
          </h2>
          <div className="pizza-grid">
            {menuData.gourmet.map((pizza, idx) => (
              <PizzaCard key={idx} pizza={pizza} />
            ))}
          </div>
        </section>
        
        <section className="menu-section">
          <h2 className={`section-title ${isDark ? 'dark' : 'light'}`}>
            {t.extras}
          </h2>
          <div className="extras-grid">
            {menuData.extras.map((extra, idx) => (
              <div key={idx} className={`extra-card ${isDark ? 'dark' : 'light'}`}>
                <p className={`item-name ${isDark ? 'dark' : 'light'}`}>
                  {language === 'fr' ? extra.name : extra.nameEn}
                </p>
                <p className={`item-price ${isDark ? 'dark' : 'light'}`}>
                  {extra.price.toFixed(2)} €
                </p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className={`section-title ${isDark ? 'dark' : 'light'}`}>
            {t.drinks}
          </h2>
          <div className="extras-grid">
            {menuData.drinks.map((drink, idx) => (
              <div key={idx} className={`drink-card ${isDark ? 'dark' : 'light'}`}>
                <div className="drink-icon">
                  {drink.nameEn === 'CAN' ? 
                  <img src={cannete} alt="Canette" /> : <img src={bouteille} alt="Bouteille" />}
                </div>
                <p className={`item-name ${isDark ? 'dark' : 'light'}`}>
                  {language === 'fr' ? drink.name : drink.nameEn}
                </p>
                <p className={`item-price ${isDark ? 'dark' : 'light'}`}>
                  {drink.price.toFixed(2)} €
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuPage;