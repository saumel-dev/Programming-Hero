import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/public/data.json'),
        Component: Home
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      }
    ]
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </StrictMode>,
)
