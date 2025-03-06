import { useState } from 'react';
import './App.css'

// You can store arrays, objects, or even more complex data structures in state

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }])
  };

  const incrementCounter = (id) => {
    setCounters(counters.map(counter => (
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    )));
  }

  return (
    <div className='app-container'>
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>Counter {counter.id}: {counter.value}
            <button onClick={() => { incrementCounter(counter.id) }}>Increment</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
