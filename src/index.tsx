import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import {ProductsPage} from "./pages/ProductsPage";
import {store} from "./redux";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h1>Sorry error</h1>,
      children: [
         {
            index: true,
            element: <ProductsPage/>,
         },
      ],
   },
]);


root.render(
   <Provider store={store}>
      <RouterProvider router={router}/>
   </Provider>
);
