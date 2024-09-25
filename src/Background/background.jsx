import React, { useEffect, useState } from 'react';
import lightModeVideo from '../hex.mp4'; // Light-Mode-Video
import darkModeVideo from '../yellow.mp4';  // Dark-Mode-Video
import './background.css';

const BackgroundVideo = ({ isDarkMode }) => {
    const [videoSrc, setVideoSrc] = useState(lightModeVideo);
  
    useEffect(() => {
      // Setzt das Video auf Light- oder Dark-Mode basierend auf dem isDarkMode-Prop
      setVideoSrc(isDarkMode ? darkModeVideo : lightModeVideo);
    }, [isDarkMode]);
  
    return (
      <div className="background-container">
        {/* Nutze den key prop, um das Video neu zu laden, wenn sich der Modus ändert */}
        <video key={videoSrc} className="background-video" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default BackgroundVideo;