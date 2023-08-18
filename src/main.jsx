import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import People from "./pages/People.jsx"
import Jobs from "./pages/Jobs";
import Adverts from "./pages/Adverts";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import Home from "./pages/Home";
import Dashboard from './Layout/Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>   
  }
,
{
  path:"/dashboard",
  element:<Dashboard/>,
  children:[
    {
      path:"/dashboard",
      element:<Home/>
    },
    {
      path:"/dashboard/people",
      element:<People/>
    },
    {
      path:"/dashboard/jobs",
      element:<Jobs/>
    },
    {
      path:"/dashboard/adverts",
      element:<Adverts/>
    },
    {
      path:"/dashboard/events",
      element:<Events/>
    },
    {
      path:"/dashboard/announcements",
      element:<Announcements/>
    }
  ]
 
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
