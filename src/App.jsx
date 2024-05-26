

import Header from './Components/Header';
import {Body} from "./Components/Body";
import RestaurantMenu from './Components/RestaurantMenu';
// import About from './Components/About';

import { Outlet,createBrowserRouter} from 'react-router-dom';

import { Suspense, lazy } from 'react';
const About = lazy(()=>import("./Components/About.jsx"));

export const appRouter = createBrowserRouter ([
  {  
    path:"/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Body/>,  
    },
    {
      path:"/about",
      element:<Suspense fallback={<><p>loading!!</p></>}><About/></Suspense>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
   
  ],
   
  },
]);


 function App() {
  return (
  <>
    <Header/>
    <Outlet/>
  </>
  )
}
 