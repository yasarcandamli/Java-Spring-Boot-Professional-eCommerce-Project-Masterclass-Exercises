import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <>
      <h1>Hello</h1>
      <ProfileCard name='Alice' age='23' isMember={true} />
      <ProfileCard name='John' age='42' isMember={false} />
    </>
  )
}

export default App
