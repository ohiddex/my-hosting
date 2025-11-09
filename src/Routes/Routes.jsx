import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Error from "../Components/Error";
import Web from "../Pages/Web";
import Cloud from "../Pages/Cloud";
import Vps from "../Pages/Vps";
import Dedicated from "../Pages/Dedicated";
import Resell from "../Pages/Resell";

  const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          
        },
    {
      path:"/web-hosting",
      element: <Web></Web>
    },
    {
      path:"/cloud-hosting",
      element: <Cloud></Cloud>
    },
    {
      path:'/vps-hosting',
      element:<Vps></Vps>
    },
    {
    path:'/wordPress-hosting',
    element:<Dedicated></Dedicated>
    },
    {
path:'/reseller-hosting',
element:<Resell></Resell>
    },
    
    
    
    ]
  },
]);

 export default router;