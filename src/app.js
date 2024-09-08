import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
//import Grocery from './components/Grocery';
//import { lazy } from 'react';
// chuncking
// code-split
// Lazy Loading
// Dynamic bundling
const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));
const AppLayout = () =>{
    return(
    <div className='app'>
     <Header/>
     <Outlet/>
    </div>
    )
};

const appRouter = createBrowserRouter([
{
    path :"/",
    element: <AppLayout />,
    children:[
        {
           path:'/',
           element:<Body />
        },
        {
            path :"/about",
            element:(<Suspense fallback= {<h1>Loading....</h1>} ><About /></Suspense>),
        },
        {
            path :"/Grocery",
            element:(<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>),
        },
        {
            path :"/contact",
            element:<Contact />,
        },
        {
            path :"/restaurants/:resId",
            element:<RestaurantMenu />,
        }
    ],
    errorElement:<Error/>
},

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);

