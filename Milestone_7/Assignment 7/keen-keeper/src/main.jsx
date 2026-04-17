import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'
import Home from './Pages/Home'
import FriendsDetails from './Pages/FriendsDetails'
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/data.json'),
        Component: Home
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      },
      {
        path: "/friend/:id",
         loader: () => fetch('/data.json'),
         Component: FriendsDetails
      }
    ],
  },
  {
    path: "*",
    Component: Error
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </StrictMode>,
)
