import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('New Post Added: ', response.data);
        setData([response.data, ...data]);
      })
  };

  return (
    <div>
      <h1>API's in React</h1>
      <form action="" onSubmit={handleSubmit}>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  )
}

export default App;
