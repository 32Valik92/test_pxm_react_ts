import React, {FC} from "react";

import {CategoriesComponent, ProductsComponent} from "../components";

const ProductsPage: FC = () => {
   return (
      <div className="productsPage">
         <CategoriesComponent/>

         <ProductsComponent/>
      </div>
   );
};

export {ProductsPage};
