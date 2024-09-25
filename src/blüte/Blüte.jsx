import { useEffect } from "react";
import "./blüte.css";
import flowerImg from "../coin.png"; // Bild importieren

const FlowerFall = ({ maxFlowers = 100}) => {
  useEffect(() => {
    const flowers = [];

    const createFlower = () => {
      const flower = document.createElement("img");
      flower.src = flowerImg; // Verwende das importierte Bild
      flower.className = "flower";
      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.top = "-50px";
      flower.speed = Math.random() * 2 + 1;
      flower.rotation = Math.random() * 360;
      flowers.push(flower);
      document.body.appendChild(flower);
    };

    const animateFlowers = () => {
      flowers.forEach((flower, index) => {
        flower.style.top = parseFloat(flower.style.top) + flower.speed + "px";
        flower.style.transform = `rotate(${flower.rotation}deg)`;
        flower.rotation += flower.speed;

        if (parseFloat(flower.style.top) > window.innerHeight) {
          flower.remove();
          flowers.splice(index, 1);
        }
      });

      if (flowers.length < maxFlowers) {
        createFlower();
      }

      requestAnimationFrame(animateFlowers);
    };

    animateFlowers();

    return () => {
      flowers.forEach((flower) => flower.remove());
    };
  }, [maxFlowers]);

  return null;
};

export default FlowerFall;
