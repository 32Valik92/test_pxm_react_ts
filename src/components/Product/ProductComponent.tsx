import React, {FC} from "react";

import {IProductModel} from "../../models";
import {productAction, useAppDispatch} from "../../redux";

interface IProps {
    product: IProductModel,
}

const ProductComponent: FC<IProps> = ({product}) => {
   const dispatch = useAppDispatch();

   return (
      <div className="product">
         <div className="productValue"><img src={product.image} alt="product image"/></div>
         <div className="productValue">{product.title}</div>
         <div className="productValue">{product.price}</div>
         <div className="productValue">{product.category}</div>
         <button className="productValue" onClick={() => dispatch(productAction.addToOrderList(product))}>Добавить в
                корзину
         </button>
      </div>
   );
};

export {ProductComponent};