import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  return (
    <div className='app-container'>
      <h1>Hello</h1>
      <ProfileCard
        name='Alice'
        age='23'
        isMember={true}
        hobbies={['Reading', 'Cooking']}
        onHobbyClick={handleHobbyClick} />
      <ProfileCard
        name='John'
        age='43'
        isMember={false}
        hobbies={['Swimming', 'Hiking']}
        onHobbyClick={handleHobbyClick} />
    </div>
  )
}

export default App;
