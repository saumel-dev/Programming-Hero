import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'
import ListedBook from './Pages/ListedBook/ListedBook.jsx'
import PTR from './Pages/PagestoRead/PTR.jsx'
import BookContextProvider from './Context/BookContextProvider.jsx'
import ReadList from './ReadList/ReadList.jsx'
import WishList from './WishList/WishList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/books/:id",
        loader: () => fetch('/public/booksData.json'),
        Component: BookDetails
      },
      {
        path: "/listedbook",
        Component: ListedBook
      },
      {
        path: "/toread",
        Component: PTR
      },
    ]
  },
  {
    path: "*",
    element: <h1>404 not found</h1>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </BookContextProvider>
  </StrictMode>,
)
