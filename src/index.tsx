import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h1>Sorry error</h1>,
      children: [
         {
            index: true, element: <App/>,
         }
      ]
   }
]);
root.render(
   <RouterProvider router={router}/>
);
