import '../style/pages/contactPage.css';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Configuration EmailJS
      // Remplacez ces valeurs par vos propres clés depuis https://www.emailjs.com/
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Chippy Pizza',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus(t.successMessage);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: t.address,
      info: t.addressLine1,
      info2: t.addressLine2
    },
    {
      icon: <Phone size={24} />,
      title: t.phone,
      info: t.phoneNumber,
      info2: t.phoneHours
    },
    {
      icon: <Mail size={24} />,
      title: t.email,
      info: t.emailAddress,
      info2: t.emailResponse
    },
    {
      icon: <Clock size={24} />,
      title: t.hours,
      info: t.hoursWeekday,
      info2: t.hoursWeekend
    }
  ];

  return (
    <div className={`contact-page ${isDark ? 'dark' : 'light'}`}>
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">{t.contactTitle}</h1>
        <p className="contact-subtitle">
          {t.contactSubtitle}
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-section">
          {contactInfo.map((item, idx) => (
            <div key={idx} className="contact-info-card">
              <div className="contact-info-header">
                {item.icon}
                <h3 className="contact-info-title">{item.title}</h3>
              </div>
              <p className="contact-info-text">{item.info}</p>
              <p className="contact-info-subtext">{item.info2}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="form-title">{t.sendMessage}</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <label className="form-label">
                <User size={18} />
                {t.fullName}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.fullNamePlaceholder}
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label className="form-label">
                <Mail size={18} />
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.emailPlaceholder}
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Input */}
            <div className="form-group">
              <label className="form-label">
                <Phone size={18} />
                {t.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label className="form-label">
                <MessageSquare size={18} />
                {t.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t.messagePlaceholder}
                className="form-textarea"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitting}
            >
              <Send size={20} />
              {isSubmitting ? 'Envoi en cours...' : t.sendButton}
            </button>

            {/* Status Message */}
            {status && (
              <div className="form-status">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map-section">
        <h2 className="map-title">{t.visitUs}</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.7064632810434!2d5.378285!3d43.290327999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0d4b69b63af%3A0x3c53f26b35fb638!2s29A%20Rue%20d'Italie%2C%2013006%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chippy Pizza Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;