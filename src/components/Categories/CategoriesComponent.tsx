import React, {FC, useState} from "react";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";

const CategoriesComponent: FC = () => {
   const {categories} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   const [selectedCategory, setSelectedCategory] = useState<string>("all"); // for chosin category

   // Fun for click on someone in category menu
   const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);

      if (category === "all") {
         dispatch(productAction.getProducts());
      } else {
         dispatch(productAction.getProductsByCategory({category}));
      }
   };
   return (
      <div className="categoryBlock">
         <h3 className="categoriesHeader">Category</h3>

         <div className="categoriesContainer">
            <div
               className={`category ${selectedCategory === "all" ? "active" : ""}`}
               onClick={() => handleCategoryChange("all")}
            >
                   All products
            </div>
            {categories.map(category => (
               <div
                  key={category}
                  className={`category ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryChange(category)}
               >
                  {category}
               </div>
            ))}
         </div>
      </div>
   );
};

export {CategoriesComponent};