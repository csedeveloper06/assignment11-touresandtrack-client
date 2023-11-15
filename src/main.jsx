import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root';
import Home from './Pages/Home/Home';
import Error from './Pages/ErrorPage/Error';
import Login from './Pages/Login/Login';
import AllServices from './Pages/AllServices/AllServices';
import Register from './Pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import AddAService from './Pages/AddAService/AddAService';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import BookNowForm from './Pages/BookNowForm/BookNowForm';
import MySchedules from './Pages/MySchedules/MySchedules';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allservices',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:5000/touristServices')
      },
      {
        path: '/bookings',
        element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
      },
      {
        path: "/servicedetails/:_id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ()=> fetch('http://localhost:5000/touristServices')
      },
      {
        path: "/booknowform/:id",
        element: <BookNowForm></BookNowForm>,
        loader: ({params}) => fetch(`http://localhost:5000/touristServices/${params.id}`)
      },
      {
        path: '/addaservice',
        element: <PrivateRoute><AddAService></AddAService></PrivateRoute>
      },
      {
        path: '/manageServices',
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
