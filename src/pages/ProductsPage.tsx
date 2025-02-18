import React, {FC} from "react";

import {ProductsComponent} from "../components";

const ProductsPage: FC = () => {
   return (
      <div className="productsPage">
         <ProductsComponent/>
      </div>
   );
};

export {ProductsPage};
