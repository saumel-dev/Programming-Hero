import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Laptop from './Components/Laptops/Laptop.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserCard from './Components/Users/UserCard.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'laptop', Component: Laptop },
      { path: 'mobile', Component: Mobiles },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>user loading</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: '*',
    element: <h3>Not Found: 404 Status</h3>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
