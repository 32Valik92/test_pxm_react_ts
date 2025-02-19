import React, {FC} from "react";

import {IProductModel} from "../../models";
import {productAction, useAppDispatch} from "../../redux";

interface IProps {
    order: IProductModel;
}

const OrderComponent: FC<IProps> = ({order}) => {
   const dispatch = useAppDispatch();

   return (
      <div className="order">
         <img className="productImg" src={order.image} alt="product image"/>
         <div className="productValue">
            <div className="productTitle">{order.title}</div>
            <div className="productPrice">{order.price} $</div>
         </div>
         <img className="trashIcon" src="/images/trash.png" alt="trash image"
            onClick={() => dispatch(productAction.deleteFromListOrder(order))}/>
      </div>
   );
};

export {OrderComponent};