import React, {FC, useState} from "react";

import {IProductModel} from "../../models";
import {productAction, useAppDispatch} from "../../redux";

interface IProps {
    order: IProductModel;
}

const OrderComponent: FC<IProps> = ({order}) => {
   const dispatch = useAppDispatch();

   const [count, setCount] = useState<number>(1);

   const decreaseCount = () => {
      setCount(prev => (prev > 1 ? prev - 1 : 1)); // Не дає зменшити нижче 1
   };

   const increaseCount = () => {
      setCount(prev => prev + 1);
   };

   return (
      <div className="order">
         <img className="orderImg" src={order.image} alt="product image"/>

         <div className="orderTitleCategory">
            <div className="orderCategory">{order.category}</div>
            <div className="orderTitle">{order.title}</div>
         </div>

         <div className="orderSettings">
            <div className="orderPrice">${(order.price * count).toFixed(2)}</div>

            <div className="orderButtons">
               <div className="orderCounts">
                  <span className="orderCount countButton" onClick={decreaseCount}>-</span>
                  <span className="orderCount orderValue">{count}</span>
                  <span className="orderCount countButton" onClick={increaseCount}>+</span>
               </div>

               <img className="trashIcon" src="/images/delete.png" alt="trash image"
                  onClick={() => dispatch(productAction.deleteFromListOrder(order))}/>
            </div>
         </div>

      </div>
   );
};

export {OrderComponent};