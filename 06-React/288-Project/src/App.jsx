
import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    text: 'Abc',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  };
  return (
    <div className='form-container'>
      <h1>Form Example</h1>
      <form action="">
        {/*Text ınput*/}
        <div className='form-field'>
          <label htmlFor="">Text:</label>
          <input type="text"
            name='text'
            value={formData.text}
            onChange={handleChange} />
        </div>

        {/*Checkbox*/}
        <div className='form-field'>
          <label htmlFor="">
            <input type="checkbox"
              name='checkbox'
              checked={formData.checkbox}
              onChange={handleChange} />
            Checkbox
          </label>
        </div>

        {/*Radio Buttons*/}
        <div className='form-field'>
          <label htmlFor="">Radio:</label>
          <label htmlFor="">
            <input type="radio"
              name='radio'
              value='option1'
              checked={formData.radio === 'option1'}
              onChange={handleChange} />
            Option 1
          </label>
          <label htmlFor="">
            <input type="radio"
              name='radio'
              value='option2'
              checked={formData.radio === 'option2'}
              onChange={handleChange} />
            Option 2
          </label>
        </div>

        {/*Dropdown*/}
        <div className='form-field'>
          <label htmlFor="">Select:</label>
          <select name="select"
            value={formData.select}
            onChange={handleChange}
            id="">
            <option value=''>-- Choose an Option --</option>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
          </select>
        </div>

        <div className='form-data'>
          <h3>Form Data</h3>
          <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
          <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
        </div>
      </form>
    </div>
  )
}

export default App
