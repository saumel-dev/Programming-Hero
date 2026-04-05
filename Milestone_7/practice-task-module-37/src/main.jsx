import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Countries from './Components/Countries/Countries.jsx'
import CountryDetails from './Components/CountryDetails/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:
      [
        { index: true, Component: Home },
        {
          path: 'countries',
          loader: () => fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,cca3'),
          Component: Countries
        },
        {
          path: 'countries/:code',
          loader: ({ params }) => fetch(` https://restcountries.com/v3.1/alpha/${params.code}`),
          Component: CountryDetails
        }
      ]
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
