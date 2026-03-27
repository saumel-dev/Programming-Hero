import './App.css'
import ToDo from './Todo'
import Brand from './brand'
function App() {
  const time = 50;
  const brands = ['nzxt', 'corsair', 'gskill', 'asus'];
  return (
    <>
      <h1>React Core Concepts</h1>
      {
        brands.map(brand => <Brand brand={brand}></Brand>)
      }
    </>
  )
}
// function Brand (){
//   const cp = ['nzxt', 'corsair', 'gskill'];
//   return (
//     <>
//       cp.map()
//     </>
//   )
// }
function Developer({ name, tech }) {
  return (
    <div style={{
      color: 'red',
      border: '2px solid blue',
      borderRadius: '50px'
    }}>
      <h3>Developer: {name} </h3>
      <p>Technology: {tech} </p>
    </div>
  )
}
function Students() {
  return (
    <>
      <div className='student'>
        <p>Name: </p>
        <p>Department: </p>
      </div>
    </>
  )
}
function Person() {
  const name = 'rahi';
  const age = 25;
  const personStyle = {
    color: 'red'
  }
  return (
    <p style={personStyle}>I am a Person: {name} {age}</p>
  )
}
function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
    </div>
  )
}
export default App
