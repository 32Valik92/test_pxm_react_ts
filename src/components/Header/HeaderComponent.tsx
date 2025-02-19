import React, {FC, useState} from "react";
import {NavLink} from "react-router-dom";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";
import {OrderComponent} from "../Order/OrderComponent";

const HeaderComponent: FC = () => {
   const {categories, shoppingCardTriger, orders} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   const [selectedCategory, setSelectedCategory] = useState<string>("all"); // для обраної категорії

   // Функція для обробки кліку по категорії
   const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);

      if (category === "all") {
         dispatch(productAction.getProducts());
      } else {
         dispatch(productAction.getProductsByCategory({category}));
      }
   };

   return (
      <header className="headerContainer">
         <NavLink to={"/"}>Home page</NavLink>

         {/* Контейнер з категоріями */}
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

         {/* Корзина */}
         <img
            src="/images/korzyna.png"
            alt="korzyna"
            onClick={() => dispatch(productAction.openCloseShoppingCart())}
            className={`shopingCard ${shoppingCardTriger ? "active" : ""} ${orders.length > 0 ? "pulse" : ""}`}
         />

         {/* Елементи корзини, якщо є */}
         {shoppingCardTriger && (
            <div className="ordersResult">
               {orders.length > 0 ? (
                  orders.map(order => <OrderComponent key={order.id} order={order}/>)
               ) : (
                  <div className="emptyResult">Sorry, but you have to chose something!</div>
               )}
            </div>
         )}
      </header>
   );
};

export {HeaderComponent};
