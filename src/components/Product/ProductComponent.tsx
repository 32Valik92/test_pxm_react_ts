import React, {FC} from "react";

import {IProductModel} from "../../models";

interface IProps {
    product:IProductModel,
}

const ProductComponent: FC<IProps> = ({product}) => {
   return (
      <div className="product">
         <div className="productValue"><img src={product.image} alt="product image"/></div>
         <div className="productValue">{product.title}</div>
         <div className="productValue">{product.price}</div>
         <div className="productValue">{product.category}</div>
         <div className="productValue">Добавить в корзину</div>
      </div>
   );
};

export {ProductComponent};