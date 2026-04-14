import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root'
import Timeline from './Pages/Timeline'
import Stats from './Pages/Stats'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {path: "/timeline", Component: <Timeline></Timeline>},
      {path: "/stats", Component: <Stats></Stats>}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </StrictMode>,
)
