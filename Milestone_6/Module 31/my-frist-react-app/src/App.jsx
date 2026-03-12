import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
function App() {
  const time = 50;
  return (
    <>
      <h1>React core concepts</h1>
      <Todo task="learn react" isDone={true} time={time}></Todo>
      <Todo task="Revise JS" isDone={false}></Todo>
      <Todo task="Take a shower" isDone={false}></Todo>

    </>
  )
}
// const { name, run } = { name: 'anonymous', run: 100 }
function Player({ name, run }) {
  return (
    <div className='student'>
      <h3>Player Name: {name} </h3>
      <h3>Player Runs: {run} </h3>
    </div>
  )
}
function Food() {
  return (
    <div style={{
      border: '2px solid blue',
      padding: '10px'
    }}>
      <p>Pizza</p>
      <p>Burger</p>
    </div>
  )
}
function Animal() {
  const s = {
    color: 'green',
    fontSize: '25px'
  }
  const pet = 'Cat'
  const pet2 = 'Dog'
  return (
    <>
      <p style={s}>{pet}</p>
      <p style={s}>{pet2}</p>
    </>
  )
}
function Developer(props) {
  console.log(props);
  return (
    <div style={{
      color: 'blue',
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}
function Students() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}
function Person() {
  const age = 17;
  const name = 'anonymous';
  const personStyle = {
    color: 'red',
    fontSize: '20px',
    textAlign: 'center'
  }
  return (
    <p style={personStyle} >I am a person {name} {age} </p>
  )
}
function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>football</li>
        <li>soccer</li>
      </ul>
      <p>Playing and loosing</p>
    </div>
  )
}
function Car(props) {
  return (
    <div>
      <p>Car Brand: {props.name}</p>
      <p>Car Price: {props.price}</p>
    </div>
  )
}
function Book(props) {
  return (
    <div>
      <p>Book Name: {props.name}</p>
      <p>Book Price: {props.price}</p>
    </div>
  )
}
export default App
