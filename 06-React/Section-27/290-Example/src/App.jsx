
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);

  useEffect(() => {
    document.title = `Count ${count}`;
    console.log(`useEffect Triggered`);
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>Another Value</button>
    </div>
  )
}

export default App
