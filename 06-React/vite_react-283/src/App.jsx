import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1)
  };

  const decrementCount = () => {
    setCount(count - 1)
  };

  return (
    <div className='app-container'>
      <h1>Counter Value: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
