import { useState } from "react";
import { createContext } from "react";
import translation from "../constants/translation.js";

const LanguageContext = createContext();


const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr");
    const t = translation[language];
    const toggleLanguage = () => setLanguage(prev => prev ==="fr" ? "en" : "fr");


    return (

        <LanguageContext.Provider value = {{ language, t, toggleLanguage }}>
            {children}
            </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
