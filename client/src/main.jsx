import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/pages/Home.jsx';
import Characters from './routes/pages/Characters.jsx';
import Films from './routes/pages/Films.jsx';
import Planets from './routes/pages/Planets.jsx';
import Starships from './routes/pages/Starships.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/films',
    element: <Films />
  },
  {
    path: '/planets',
    element: <Planets />
  },
  {
    path: '/starships',
    element: <Starships />
  },
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
