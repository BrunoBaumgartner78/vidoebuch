import React, { useState } from 'react';
import hexagrams from '../hexagrams.json';
import CoinFlipButton from '../CoinFlipButton/confFlipButton';
import './tiegerDrachen.css';

const TigerDragon = () => {
  const [hexagram, setHexagram] = useState([]);
  const [hexagramInfo, setHexagramInfo] = useState(null);
  const [history, setHistory] = useState([]);

  const handleCoinFlip = (result) => {
    setHexagram(prevHexagram => {
      const newLine = result === 'TIGER' ? 'Yang' : 'Yin';
      const updatedHexagram = [...prevHexagram, newLine];

      // Aktualisiere die Historie
      setHistory(prevHistory => {
        const newHistory = [...prevHistory, result];
        if (newHistory.length > 6) {
          newHistory.shift(); // Entferne das älteste Element, wenn mehr als 6
        }
        return newHistory;
      });

      // Wenn das Hexagramm 6 Linien hat
      if (updatedHexagram.length === 6) {
        const hexagramNumber = getHexagramNumber(updatedHexagram);
        const interpretation = hexagrams[hexagramNumber];
        setHexagramInfo(interpretation);
        return []; // Setze das Hexagramm zurück
      } else {
        return updatedHexagram;
      }
    });
  };

  const getHexagramNumber = (lines) => {
    const binary = lines.map(line => line === "Yang" ? 1 : 0).join('');
    return parseInt(binary, 2) + 1; // Wandelt in eine Zahl von 1 bis 64 um
  };

  return (
    <div className="App">
      <h1>Tiger und Drachen Orakel</h1>
      <p>Überlassen Sie Ihr Webdesign nicht dem Zufall. Stellen Sie zuerst eine Frage, dann werfen Sie 6 mal die Münze und erhalten nach 6 mal Münze werfen Ihr Orakel!</p>
      
      <CoinFlipButton onAction={handleCoinFlip} />

      <div className="hexagram">
        {hexagram.map((line, index) => (
          <div key={index} className={line === "Yang" ? "yang-line" : "yin-line"}>
            {line === "Yang" ? "🐅" : "🐉"}
          </div>
        ))}
      </div>

      {hexagramInfo && (
        <div className="interpretation">
          <h2>{hexagramInfo.name}</h2>
          <p>{hexagramInfo.description}</p>
        </div>
      )}

      <div className="history">
     
        {history.map((result, index) => (
          <div className="yinYang" key={index}>
            {result === 'TIGER' ? '🐅' : '🐉'}
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default TigerDragon;
