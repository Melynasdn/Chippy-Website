import "../../style/components/navStyle.css";
import Logo from "../../assets/logo/ChippyLogo.png"
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

const Navigation = ({ currentPage, onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
     <nav className={isDark ? 'dark' : 'light'}>
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => {
            onNavigate("home");
            setIsMenuOpen(false);
          }}
        >
          <img
          className="navbar_logo" src={Logo} alt="" />
           Chippy Pizza
        </div>

        {/* Liens principaux */}
        <div className="nav-links">
          {["home", "menu", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={currentPage === page ? "active" : ""}
            >
              {t[page]}
            </button>
          ))}
        </div>

        {/* Contrôles : langue / thème / menu mobile */}
        <div className="nav-controls">
          <button onClick={toggleLanguage} title="Changer la langue">
            { language === 'fr' ? "ENG" : "FR" }
          
          </button>

          <button onClick={toggleTheme} title="Changer le thème">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {["home", "menu", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => {
                onNavigate(page);
                setIsMenuOpen(false);
              }}
            >
              {t[page]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;