import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";
import {OrderComponent} from "../Order/OrderComponent";

const HeaderComponent: FC = () => {
   const {shoppingCardTriger, orders} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   return (
      <header className="headerContainer">
         <NavLink to={"/"}>Home page</NavLink>

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
