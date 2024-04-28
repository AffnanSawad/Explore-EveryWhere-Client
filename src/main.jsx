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
import AddMyCard from './Components/Root/AddMycard/AddMyCard.jsx';
import Addmyspot from './Components/Root/Addmyspot/Addmyspot.jsx';
import Updatedform from './Components/Root/Updatedform/Updatedform.jsx';
import PrivateRoute from './Components/Root/PrivateRoute/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement: <Error></Error>,

    children: [

    {
      path:'/',
      element: <Home> </Home> ,

     // loader: () => fetch('https://explore-everywhere.vercel.app/add')
    },
    {
      path:'/contact',
       element: 
       
       <PrivateRoute>

<Contact></Contact> 

       </PrivateRoute>
       
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
      element: <PrivateRoute>
        <Stat></Stat>
      </PrivateRoute>
    },
    {
      path: '/data',
      element: <AddCard> </AddCard>,
      //loader: ()=>fetch('https://explore-everywhere.vercel.app/add')
    },
    {
      path: '/all',
      element:
              <MySpot></MySpot>,

      
      loader: ()=>fetch('https://explore-everywhere.vercel.app/add')
    },

    {
      path: '/card/:id',
      element: <PrivateRoute>

      <CardDetails></CardDetails>

      </PrivateRoute>,
          
      loader: ()=> fetch('../public/data.json')
     },


     








     {
      path: '/addmyspot',
      element: 
      
      <PrivateRoute>

<AddMyCard></AddMyCard>,

      </PrivateRoute>
      
      //loader: ()=>fetch('https://explore-everywhere.vercel.app/user')
    },

    {
      path: '/my',
      element:
      
      <PrivateRoute>
          <Addmyspot> </Addmyspot>,


      </PrivateRoute>,
      loader: ()=>fetch('https://explore-everywhere.vercel.app/user')
    },
    {
      path: "/updateform/:id",
      element:  
      
      <PrivateRoute>
     
     
      <Updatedform></Updatedform>,


      </PrivateRoute>,
      loader: ({params}) => fetch(`https://explore-everywhere.vercel.app/user/${params.id}`)
    },
    
    




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProvider>
      
      <HelmetProvider>

      <RouterProvider router={router} />



      </HelmetProvider>
      

      
      
    </AuthProvider>

  </React.StrictMode>,
)
