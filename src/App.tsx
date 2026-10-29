import { useState } from 'react';
import { getRandomRgbComponent } from './components/getRandomRgbComponent';
import './App.css';

export const App = () => {
  const [color1, setColor1] = useState('#ff007f');
  const [color2, setColor2] = useState('#7f00ff');
  const [angle, setAngle] = useState(45);
  const [buttonText, setButtonText] = useState('Скопировать CSS');

  const toggleText = () => {
    if (buttonText === 'Скопировать CSS') {
      navigator.clipboard.writeText(backgroundStyles);
      setButtonText('Скопировано!');
      setTimeout(() => {
        setButtonText('Скопировать CSS');
      }, 1500);
    }
  };

  const randomGradient = () => {
    setAngle(Math.ceil(Math.random() * 360));
    setColor1(getRandomRgbComponent());
    setColor2(getRandomRgbComponent());
  };

  const backgroundStyles = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <section
      style={{
        background: backgroundStyles,
        height: '100dvh',
      }}
    >
      <div className="container">
        <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
        <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
        <code>{backgroundStyles}</code>
        <button onClick={toggleText}>{buttonText}</button>
        <button onClick={randomGradient}>🎲 Случайный градиент</button>
      </div>
    </section>
  );
};
