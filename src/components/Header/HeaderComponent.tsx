import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import {productAction, useAppDispatch, useAppSelector} from "../../redux";
import {OrderComponent} from "../Order/OrderComponent";

const HeaderComponent: FC = () => {
   const {shoppingCardTriger, orders} = useAppSelector(state => state.productReducer);
   const dispatch = useAppDispatch();

   return (
      <header className="headerContainer">
         <img className="headerLogo" src="/images/logo.png" alt="logo"/>

         <div className="headerLinks">
            <NavLink to={"/"} className="headerLinkHome">Home</NavLink>

            <div className="headerLinkDivImg">
               <img
                  src="/images/korzyna.png"
                  alt="korzyna"
                  onClick={() => dispatch(productAction.openCloseShoppingCart())}
                  className={`headerLinkShopCard ${shoppingCardTriger ? "active" : ""} ${orders.length > 0 ? "pulse" : ""}`}
               />
            </div>
         </div>
         

         {/* trash element */}
         {shoppingCardTriger && (
            <div className="ordersResult">
               {orders.length > 0 ? (
                  orders.map(order => <OrderComponent key={order.id} order={order}/>)
               ) : (
                  <div className="emptyResult">Sorry, but you have to chose something!</div>
               )}

               {orders.length > 0 ? 
                  <div className="cancelBlock" onClick={() => dispatch(productAction.deleteAllFromListOrder())}>
                     <p className="cancelBlockText">Clear All</p>
                  </div>
                  :
                  ""
               }
            </div>
         )}
      </header>
   );
};

export {HeaderComponent};
