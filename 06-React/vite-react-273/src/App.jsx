import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <ProfileCard name='Alice' age='23' isMember={true} hobbies={['Reading', 'Cooking']} />
      <ProfileCard name='John' age='43' isMember={false} hobbies={['Swimming', 'Hiking']} />
    </>
  )
}

export default App;
