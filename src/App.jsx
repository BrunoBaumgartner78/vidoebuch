import React, { useState } from 'react';
import MainApp from './mainApp'; // Die Haupt-App-Komponente
import Bot from './chatbot/Chatbot'; // Die Chatbot-Komponente
import Header from './header/Header'; // Die Header-Komponente
import BackgroundVideo from './Background/background';



function App() {
  const [isChatbotActive, setIsChatbotActive] = useState(false); // Zustand für den Chatbot
  const [isDarkMode, setIsDarkMode] = useState(false); // Zustand für den Dark Mode

  const toggleChatbot = () => {
    setIsChatbotActive(prevState => !prevState); // Zustand umkehren
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Wechsel zwischen Light und Dark Mode
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
     <BackgroundVideo/>
      <Header
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onCategoryChange={() => {}}
        toggleChatbot={toggleChatbot}
        isChatbotActive={isChatbotActive}
      />
      {isChatbotActive ? <Bot /> : <MainApp isDarkMode={isDarkMode} />} {/* Wechsel zwischen Haupt-App und Chatbot */}
     
    </div>
  );
}

export default App;
