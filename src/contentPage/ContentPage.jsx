// src/categoryContent/CategoryContent.jsx
import React from 'react';
import './contentPage.css'; 
import hexVideo from '../hex.mp4';
import hexVideo1 from '../hex1.mp4';
import hexVideo2 from '../hex2.mp4';



const videoUrls = {
  a: hexVideo,
  b: hexVideo1,
  c: hexVideo2,
  // Add more video URLs as needed
  d: hexVideo,
  e: hexVideo1,
  f: hexVideo2,

  g: hexVideo,
  h: hexVideo1,
  i: hexVideo2,

  j: hexVideo,
  k: hexVideo1,
  l: hexVideo,
};


const CategoryContent = ({ activeCategory }) => {
  const videoUrl = videoUrls[activeCategory];

  // Überprüfe, ob es sich um ein externes oder lokales Video handelt
  
  return (
    <div className="category-content">
  
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
   
    </div>
  );
};

export default CategoryContent;