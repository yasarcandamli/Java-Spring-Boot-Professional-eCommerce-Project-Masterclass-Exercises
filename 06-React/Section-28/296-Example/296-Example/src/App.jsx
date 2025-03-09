import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  useEffect(() => {
    console.log('Component Rendered');

  })

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'yellow';
  };

  const resetFocus = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  };

  return (
    <div>
      <h1>Learn React</h1>

      <input type="text" placeholder='Focus me' ref={inputRef} />
      <button onClick={focusInput}>Focus and Highlight</button>

      <input type="text" placeholder='Focus me' ref={inputRefNext} />
      <button onClick={focusInputNext}>Focus and Highlight</button>

      <button onClick={resetFocus}>Reset</button>
    </div>
  )
}

export default App;
