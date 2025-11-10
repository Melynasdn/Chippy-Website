import React from 'react';
import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
import '../style/components/pizzaCard.css';

const PizzaCard = ({ pizza }) => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  
  return (
    <div className={`pizza-cardd-container ${isDark ? "dark" : "light"}`}>
      {/* Image à gauche */}
      <img
        src={pizza.image}
        alt={language === 'fr' ? pizza.name : pizza.nameEn}
        className='pizza-img'
      />

      {/* Détails à droite */}
      <div className='pizza-details'>
        <h3 className='pizza-name'>
          {language === 'fr' ? pizza.name : pizza.nameEn}
        </h3>
        
        <p className='pizza-ingredients'>
          {language === 'fr' ? pizza.ingredients : pizza.ingredientsEn}
        </p>
        
        <div className='pizza-footer'>
          <span className='pizza-price'>
            {pizza.price.toFixed(2)} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
