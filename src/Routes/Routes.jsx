import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Error from "../Components/Error";

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
    
    
    
    
    ]
  },
]);

 export default router;