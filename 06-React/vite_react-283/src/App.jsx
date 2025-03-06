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

  const incrementTwice = () => {
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)

    // setCount(c => c + 1)
    // setCount(c => c + 1)
  }

  return (
    <div className='app-container'>
      <h1>Counter Value: {count}</h1>
      <input type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  );
}

export default App;
