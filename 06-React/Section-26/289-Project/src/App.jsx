
import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#fff000', '#00fff0', '#f000ff'];

  const handleColorChange = (color) => {
    setBackgroundColor(color)
  }

  return (
    <div className='App' style={{ backgroundColor }}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div key={index}
            className='color-box'
            onClick={() => handleColorChange(color)}
            style={{ backgroundColor: color }}>
          </div>
        ))}
      </div>

      <div className='custom-color-picker'>
        <input type="color" value={backgroundColor} onChange={(e) => handleColorChange(e.target.value)} />
      </div>
    </div >
  )
}

export default App
