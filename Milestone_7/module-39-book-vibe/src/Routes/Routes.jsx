import MainLayout from '../Layout/MainLayout'
import Homepage from '../Pages/Homepage/Homepage'
import Books from '../Pages/Books/Books'
import { createBrowserRouter } from 'react-router'
import Errorpage from '../Pages/Errorpage/Errorpage'
import BookDetails from '../Pages/BookDetails/BookDetails'
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
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      }
    ],

  },
  {
    path: "*",
    Component: Errorpage
  }

])