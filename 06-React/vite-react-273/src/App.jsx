import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  //const person = { name: 'John', age: 30 };
  //Without destructuring, using Dot notation
  //const name = person.name;
  //const age = person.age;
  //With destructuring
  //const { name, age } = person;

  return (
    <>
      <h1>Hello</h1>
      <ProfileCard name='Alice' age='23' isMember={true} />
      <ProfileCard name='John' age='43' isMember={false} />
    </>
  )
}

export default App;
