import { useState } from 'react'
import './App.css'
import Country from './Country';

function App() {
  const arr = ['Bd', 'Ind', 'usa'];
  const [visited, setVisited] = useState([]);
  const handleVisited = (country) => {
    const newlist = [...visited, country];
    setVisited(newlist);
    handleVisited();
  }
  return (
    <>
      <h1>Vite + React</h1>
      {
        arr.map(country => <Country country={country} handleVisited={country}></Country>)
      }
    </>
  )
}
export default App
