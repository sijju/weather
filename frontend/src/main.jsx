import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App />,
    errorElement : <Error />,
    children : [
      {
        path:'/search',
        element : <App />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
