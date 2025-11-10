import '../style/pages/contactPagecss';
import React from 'react';
import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
const ContactPage = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  
  return (
    <div className={`contact-page ${isDark ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <h1 className={`contact-title ${isDark ? 'dark' : 'light'}`}>
          {t.contact}
        </h1>
        <p className={`contact-text ${isDark ? 'dark' : 'light'}`}>
          Contact page coming soon...
        </p>
      </div>
    </div>
  );
};

export default ContactPage;