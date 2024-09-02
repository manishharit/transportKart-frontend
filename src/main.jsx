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
import TermsAndConditions from './components/Terms&Condition';
import PrivacyAndPolicies from './components/Privacy&Policies';


const baseUrl = 'http://localhost:8080';
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
    element: <RegistrationForm baseUrl={baseUrl}/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/termsAndConditions",
    element: <TermsAndConditions/>
  },
  {
    path:"/privacyAndPolicies",
    element: <PrivacyAndPolicies/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
