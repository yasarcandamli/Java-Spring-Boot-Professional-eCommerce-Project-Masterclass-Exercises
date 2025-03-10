import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required!'
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Data Submitted ', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>Forms in React</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:
          <input type="text" name="name" id="" value={formData.name} onChange={handleChange} />
          {errors.name && <span style={{ color: 'red', margin: '5px' }}>{errors.name}</span>}
          <br />
        </label>

        <label htmlFor="">
          Email:
          <input type="email" name="email" id="" value={formData.email} onChange={handleChange} />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
