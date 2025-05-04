import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './componets/Home/Home.jsx';
import Login from './componets/Login/Login.jsx';
import Register from './componets/Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Order from './componets/Order/Order.jsx';
import Profile from './componets/Profile/Profile.jsx';
import PrivetRout from './Routs/PrivetRout.jsx';
import Dashboard from './componets/Dasboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "order",
        // Component: Order
        element : <PrivetRout><Order></Order></PrivetRout>
      },
      {
        path: "profile",
        // Component: Profile
        element: <PrivetRout><Profile></Profile></PrivetRout>
      },
      {
        path: "dashboard",
        element: <PrivetRout><Dashboard></Dashboard></PrivetRout>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
