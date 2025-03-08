import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default App
