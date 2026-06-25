import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import ExpenseApp from './Components/ExpenseApp/ExpenseApp.jsx'
import ExpenseDetail from './Components/ExpenseDetail/ExpenseDetail.jsx'
import BudgetPage from './Components/BudgetPage/BudgetPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'expense', Component: ExpenseApp,
        children: [
          { path: ':id', Component: ExpenseDetail }
        ]
      },
      { path: 'budget', Component: BudgetPage }
    ]
  },
  {
    path: '*',
    element: <h3>Not Found: 404 Status</h3>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
