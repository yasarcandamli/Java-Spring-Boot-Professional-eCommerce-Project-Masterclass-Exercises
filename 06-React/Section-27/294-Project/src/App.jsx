import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time, SetTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => SetTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className='clock-container'>
      <div className='clock'>
        {formattedTime}
      </div>
    </div>
  )
}

export default App
