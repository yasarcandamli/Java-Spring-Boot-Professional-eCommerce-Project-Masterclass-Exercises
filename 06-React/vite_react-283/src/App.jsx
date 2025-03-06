import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step)
  };

  const decrementCount = () => {
    setCount(count - step)
  };

  return (
    <div className='app-container'>
      <h1>Counter Value: {count}</h1>
      <input type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
