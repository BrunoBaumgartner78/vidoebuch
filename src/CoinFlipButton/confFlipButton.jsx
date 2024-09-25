import React, { useState } from 'react';
import '../CoinFlipButton/coinFlipButton.css';

const CoinFlipButton = ({ onAction }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (isFlipping) return; // Verhindert mehrfaches Klicken während der Animation

    setIsFlipping(true);

    // Dauer der Animation: 1 Sekunde (für die Rotation der Münze)
    setTimeout(() => {
      // Zufällige Entscheidung: TIGER oder DRAGON
      const randomResult = Math.random() < 0.5 ? 'TIGER' : 'DRAGON';
      setResult(randomResult);
      
      // Simuliere den Münzwurf und zeige das Ergebnis an
      setTimeout(() => {
        setIsFlipping(false);
        if (onAction) {
          onAction(randomResult); // Action-Callback ausführen und das Ergebnis übergeben
        }
      }, 1000); // Zeit für die Animation
    }, 0);
  };

  return (
    <div
      className={`coin ${isFlipping ? 'flipping' : ''}`}
      data-result={result}
      onClick={handleClick}
    >
      <div className="coin__front">🐅</div>
      <div className="coin__back">🐉</div>
    </div>
  );
};

export default CoinFlipButton;

