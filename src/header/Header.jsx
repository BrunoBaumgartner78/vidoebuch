import React, { useState } from 'react';
import { FaSun, FaMoon, FaRobot } from 'react-icons/fa';
import { FaChessKing, FaChessKnight, FaChessPawn } from 'react-icons/fa6';
import './header.css';
import ChatbotOverlay from '../overlay/Overlay';

const Header = ({ toggleTheme, isDarkMode, onCategoryChange }) => {
  const [activeMenu, setActiveMenu] = useState(null); // Zustand für das aktive Menü
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Menü schließen, wenn es bereits aktiv ist
    } else {
      setActiveMenu(menu); // Setze das neue aktive Menü
    }
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setActiveMenu(null); // Menü schließen nach Auswahl
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="icon-links">
        <div className="menu-chatbot-icon">
          {/* Menü-Icons */}
          <div onClick={() => handleMenuClick('menu1')} className="menu-icon">
            <FaChessKing />
          </div>
          <div onClick={() => handleMenuClick('menu2')} className="menu-icon">
            <FaChessKnight />
          </div>
          <div onClick={() => handleMenuClick('menu3')} className="menu-icon">
            <FaChessPawn />
          </div>

          {/* Chatbot-Icon */}
          <div onClick={toggleChatbot} className="chatbot-icon">
            <FaRobot />
          </div>
        </div>

        {/* Dynamisches Menü */}
        <div className={`category-menu ${activeMenu === 'menu1' ? 'open' : ''}`}>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Einleitung</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Vorgehen</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Projektleitung</a>
          <a href="#category4" className="category-item" onClick={() => handleCategoryClick('a')}>Architektur</a>
          <a href="#category5" className="category-item" onClick={() => handleCategoryClick('b')}>Technologien</a>
          <a href="#category6" className="category-item" onClick={() => handleCategoryClick('c')}>Webshop</a>
          <a href="#category7" className="category-item" onClick={() => handleCategoryClick('a')}>Schulung</a>
          <a href="#category8" className="category-item" onClick={() => handleCategoryClick('b')}>Support</a>
          <a href="#category9" className="category-item" onClick={() => handleCategoryClick('c')}>SEO</a>
          <a href="#category10" className="category-item" onClick={() => handleCategoryClick('a')}>Inhalt</a>
          <a href="#category11" className="category-item" onClick={() => handleCategoryClick('b')}>Datenschutz</a>
          <a href="#category12" className="category-item" onClick={() => handleCategoryClick('c')}>Security</a>
        </div>

        <div className={`category-menu1 ${activeMenu === 'menu2' ? 'open1' : ''}`}>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Wordpress</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Sanity</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Next.js</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>React.js</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>.JSX</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>HTML</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>CSS</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Sass</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Less</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>JavaScript</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>TypeScript</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Node.js</a>
        </div>

        <div className={`category-menu2 ${activeMenu === 'menu3' ? 'open2' : ''}`}>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>UI</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>UX</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Gestaltung</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Farben</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Design</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Webshop</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Stripe</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>KI</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Freelancing</a>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Planung</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Ausführung</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Testen</a>
        </div>

        {/* Theme-Icon */}
        <div onClick={toggleTheme} className="theme-icon">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>

      {/* ChatbotOverlay */}
      <ChatbotOverlay isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </header>
  );
};

export default Header;
