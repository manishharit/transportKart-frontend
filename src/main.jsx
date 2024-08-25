import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import { Home } from './components/Home';
import { UserCard } from './components/UserCard';
import { CompanySite } from './components/CompanySite';
import { About } from './components/About';
import RegistrationForm from './helper/RegistrationForm';


const baseUrl = 'https://transportkart-backend.onrender.com';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home baseUrl={baseUrl}/>
  },
  {
    path:"/explore",
    element: <UserCard baseUrl={baseUrl}/>
  },
  {
    path:"/user/:companyName",
    element: <CompanySite baseUrl={baseUrl}/>
  },
  {
    path:"/register-user",
    element: <RegistrationForm/>
  },
  {
    path:"/about",
    element: <About/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
