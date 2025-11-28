👇

🍕 Chippy Pizza — React Restaurant Website






A modern and responsive pizza restaurant website built with React, featuring dark/light mode, multilingual support, smooth animations, and a dynamic hero carousel.

⚡ Features

🎨 Modern UI with smooth transitions

🌓 Dark / Light mode (custom hook)

🌍 FR / EN language switch

🍕 Dynamic pizza highlights & menu navigation

🖼️ Auto-rotating hero carousel

📍 Embedded Google Maps location

📱 Fully responsive

🛠️ Tech Stack

React 18

Lucide Icons

CSS3

Custom hooks (useTheme, useLanguage)

📂 Project Setup
git clone https://github.com/yourusername/chippy-pizza.git
cd chippy-pizza
npm install
npm start


Runs on → http://localhost:3000

Build for production:

npm run build

📁 File Structure (short)
src/
 ├─ pages/ HomePage.jsx
 ├─ hooks/ useTheme.js, useLanguage.js
 ├─ assets/ images
 ├─ components/ Navbar, Footer
 ├─ style/ CSS files
 └─ App.jsx

🧠 Core Logic (very brief)

Hero carousel: rotates images every 5s using useEffect.

Theme system: useTheme() toggles dark / light classes.

Translations: useLanguage() provides t text object.

🌍 Deployment

Deploy easily on:

Vercel → npm run build then drag folder

Netlify → select project, auto-deploy

GitHub Pages → gh-pages package

👩‍💻 Author

Melyna Feriel Soudani
Software Engineer • Web Developer • AI Enthusiast