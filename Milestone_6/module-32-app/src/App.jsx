import { Suspense } from 'react'
import './App.css'
import Friends from './friends'
import Posts from './post'
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}
function App() {
  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h3 className='card'>Loading... friends...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      <Suspense fallback={<h3 className='card'>Post loading...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
    </>
  )
}
export default App
