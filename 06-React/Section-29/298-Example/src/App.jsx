import { createContext, useContext, useState } from 'react';
import './App.css'

// - App = HAS THEME
//   - ComponentA
//     - ComponentB
//       - ThemedComponent = NEEDS THEME

// <MyContext.Provider value={someValue}>
//   <ComponentA />
// </MyContext.Provider>

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h2>App (Parent)</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  )
}

function ComponentA() {
  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
      <h2>ComponentA (Child)</h2>
      <ComponentB />
    </div>
  );
}

// export default ComponentA;

function ComponentB() {
  return (
    <div style={{ border: '2px solid green', padding: '20px' }}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent />
    </div>
  );
}

// export default ComponentB;

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h2>ThemedComponent (Great - GrandChild)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  );
}

// export default ThemedComponent;

export default App;
