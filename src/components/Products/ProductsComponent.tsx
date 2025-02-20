import React, {FC, useEffect, useState} from "react";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";
import {ProductComponent} from "../Product/ProductComponent";


const ProductsComponent: FC = () => {
   const {products, loading} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   const [currentPage, setCurrentPage] = useState<number>(1);
   const productsPerPage = 4;

   const indexLastProduct = currentPage * productsPerPage;
   const indexFirstProduct = indexLastProduct - productsPerPage;
   const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(prev => prev - 1);
      }
   };

   const nextPage = () => {
      if (currentPage < Math.ceil(products.length / productsPerPage)) {
         setCurrentPage(prev => prev + 1);
      }
   };

   useEffect(() => {
      dispatch(productAction.getProducts());
      dispatch(productAction.getCategories());
   }, [dispatch]);

   return (
      loading ?
         <div className="loader"></div>
         :
         <div className="productsAndPagination">
            <div className="products">
               {currentProducts.map((product) => (
                  <ProductComponent key={product.id} product={product}/>
               ))}
            </div>

            <div className="pagination">
               <button onClick={prevPage} disabled={currentPage === 1}>
                  {"<"} Prev
               </button>

               <p>Page {currentPage} of {Math.ceil(products.length / productsPerPage)}</p>

               <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
                  Next {">"}
               </button>
            </div>
         </div>
   );

};

export {ProductsComponent};
