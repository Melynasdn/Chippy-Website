import React from 'react'
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
      const { isDark } = useTheme();
  const { t } = useLanguage();
  return (
    <div>
              {/* Final CTA */}
    <section className={`final-cta ${isDark ? 'dark' : 'light'}`}>
        <div className="final-cta-content">
          <h2 className="final-cta-title">
            {t.finalCtaTitle}
          </h2>
          <div className="final-cta-buttons">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=29A+Rue+d'Italie,+13006+Marseille,+France"
              target="_blank"
              rel="noopener noreferrer"
              className={`cta-btn ${isDark ? 'dark' : 'light'}`}
              style={{ textDecoration: 'none' }}
            >
              <MapPin size={24} />
              {t.findPizzeria}
            </a>
            <a 
              href="tel:+33695134764"
              className="cta-btn cta-btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={24} />
              {t.phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
