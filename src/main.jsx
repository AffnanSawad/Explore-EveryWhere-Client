import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home/Home.jsx';
import Error from './Components/Root/Error/Error.jsx';
import Contact from './Components/Root/Contact/Contact.jsx';
import Login from './Components/Root/login/Login.jsx';
import Register from './Components/Root/register/Register.jsx';
import AuthProvider from './Components/Root/Providers/AuthProvider.jsx';
import AddCard from './Components/Root/AddCard/AddCard.jsx';
import Stat from './Components/Root/Stat/Stat.jsx';
import MySpot from './Components/Root/MySpot/MySpot.jsx';
import CardDetails from './Components/Root/CardDetails/CardDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement: <Error></Error>,

    children: [

    {
      path:'/',
      element: <Home> </Home> ,

     // loader: () => fetch('http://localhost:5000/add')
    },
    {
      path:'/contact',
       element: <Contact></Contact> 
    },
    {
      path:'/login',
      element:  <Login></Login>
    },
    {
      path:'/signup',
      element:<Register></Register>
    },
    {
      path:'/stat',
      element: <Stat></Stat>
    },
    {
      path: '/add',
      element: <AddCard> </AddCard>,
      //loader: ()=>fetch('http://localhost:5000/add')
    },
    {
      path: '/all',
      element: <MySpot></MySpot>,
      loader: ()=>fetch('http://localhost:5000/add')
    },

    {
      path: '/card/:id',
      element: 
         <CardDetails></CardDetails>,
      loader: ()=> fetch('../public/data.json')
     }
    
    




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProvider>
      
      
      
      <RouterProvider router={router} />

      
      
    </AuthProvider>

  </React.StrictMode>,
)
