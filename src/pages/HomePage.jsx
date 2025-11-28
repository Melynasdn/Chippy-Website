import React, { useState, useEffect} from 'react';
import { ChevronRight, Heart, Clock, Award} from 'lucide-react';
import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
import '../style/pages/homePage.css';
import pizza1 from '../assets/caroussel/IMG_4159.jpg'
import pizza2 from '../assets/caroussel/IMG_4163.jpg'
import pizza3 from '../assets/caroussel/IMG_4989.jpg'
import viande from '../assets/pizzaImages/PizzaViande-removebg-preview.png';
import troisFrommage from '../assets/pizzaImages/Pizza3frommage-removebg-preview.png';
import vegetarian from '../assets/pizzaImages/PizzaVegetarian-removebg-preview.png';

const HomePage = ({onNavigate }) => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [pizza1, pizza2, pizza3];

  const pizzaHighlights = [
    {
      image: viande,
      name: t.pizzaMeat || 'Viande',
      description: t.pizzaMeatDesc || 'Pour les amateurs de viande'
    },
    {
      image: troisFrommage,
      name: t.pizzaCheese || '3 Fromages',
      description: t.pizzaCheeseDesc || 'Un délice fromager'
    },
    {
      image: vegetarian,
      name: t.pizzaVegetarian || 'Végétarienne',
      description: t.pizzaVegetarianDesc || 'Fraîcheur et saveurs'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`homepage ${isDark ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Pizza"
              className={`hero-image ${index === currentImage ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
<div className="hero-content">
  <div className="hero-badge">{t.heroBadge}</div>
  <h1 className="hero-title">
    {t.heroTitle}
  </h1>
  <p className="hero-subtitle">
    {t.heroSubtitle}
  </p>
  <button className="hero-cta" onClick={() => onNavigate('menu')}>
    Menu
    <ChevronRight size={24} />
  </button>
</div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-grid">
          <div className={`story-content ${isDark ? 'dark' : 'light'}`}>
            <h2>
              {t.storyTitle1}<br />
              <span className="story-highlight">{t.storyTitle2}</span>
            </h2>
            <p>
              {t.storyText1}
            </p>
            <p>
              {t.storyText2}
            </p>
          </div>
          <img 
            src= {pizza3} 
            alt="Pizza making"
            className="story-image"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className={`values-section ${isDark ? 'dark' : 'light'}`}>
        <div className="values-container">
          <h2 className="values-title">{t.valuesTitle}</h2>
          <p className="values-subtitle">{t.valuesSubtitle}</p>
          
          <div className="values-grid">
            <div className={`value-card ${isDark ? 'dark' : 'light'}`}>
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3 className="value-title">{t.value1Title}</h3>
              <p className="value-description">
                {t.value1Desc}
              </p>
            </div>

            <div className={`value-card ${isDark ? 'dark' : 'light'}`}>
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3 className="value-title">{t.value2Title}</h3>
              <p className="value-description">
                {t.value2Desc}
              </p>
            </div>

            <div className={`value-card ${isDark ? 'dark' : 'light'}`}>
              <div className="value-icon">
                <Clock size={40} />
              </div>
              <h3 className="value-title">{t.value3Title}</h3>
              <p className="value-description">
                {t.value3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pizza Showcase */}
      <section className="showcase-section">
        <div className="showcase-header">
          <h2 className={`showcase-title ${isDark ? 'dark' : 'light'}`}>
            {t.showcaseTitle}
          </h2>
        </div>

        <div className="showcase-grid">
          {pizzaHighlights.map((pizza, index) => (
            <div key={index} className={`pizza-card ${isDark ? 'dark' : 'light'}`}>
              <img src={pizza.image} alt={pizza.name} className="pizza-image" />
              <div className="pizza-info">
                <h3 className="pizza-name">{pizza.name}</h3>
                <p className="pizza-description">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default HomePage;