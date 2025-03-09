import { useEffect, useRef } from 'react';
import './App.css'

// - App = DATA
//   - ComponentA
//     - ComponentB
//       - ThemedComponent = NEEDS THEME

function App() {
  const theme = 'dark';

  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>App (Parent)</h2>
      <ComponentA theme={theme} />
    </div>
  )
}

function ComponentA({ theme }) {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ComponentA (Child)</h2>
      <ComponentB theme={theme} />
    </div>
  );
}

// export default ComponentA;

function ComponentB({ theme }) {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent theme={theme} />
    </div>
  );
}

// export default ComponentB;

function ThemedComponent({ theme }) {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ThemedComponent (Great - GrandChild)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  );
}

// export default ThemedComponent;

export default App;
