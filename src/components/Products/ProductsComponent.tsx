import React, {FC, useEffect} from "react";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";
import {ProductComponent} from "../Product/ProductComponent";


const ProductsComponent: FC = () => {
   const {products, loading} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(productAction.getProducts());
      dispatch(productAction.getCategories());
   }, [dispatch]);

   return (
      <div>


         {
            loading ?
               <div className="loader"></div>
               :
               <div className="products">
                  {products.map((product) => (
                     <ProductComponent key={product.id} product={product}/>
                  ))}
               </div>

         }
      </div>
   );

};

export {ProductsComponent};
