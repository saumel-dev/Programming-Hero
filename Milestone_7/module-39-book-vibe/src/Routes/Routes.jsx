import MainLayout from '../Layout/MainLayout'
import Homepage from '../Pages/Homepage/Homepage'
import Books from '../Pages/Books/Books'
import { createBrowserRouter } from 'react-router'
import Errorpage from '../Pages/Errorpage/Errorpage'
export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "/books",
        Component: Books
      }
    ],
    errorElement: <Errorpage></Errorpage>
  },
  
])