import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Pages/HomePage/HomePage';
import Root from './Root/Root.jsx'
import Books from './Pages/Books/Books.jsx'
import wishlist from './Components/Wishlist/wishlist.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {
        index: true,
        Component:HomePage ,
      },
      {
        path:"books",
        Component:Books,
      },
      {
        path:'wishlist',
        Component:wishlist,
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
