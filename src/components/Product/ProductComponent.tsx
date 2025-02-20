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
         <div className="productImg"><img src={product.image} className="productImgImg" alt="product image"/></div>
         <div className="productTitle">{product.title}</div>
         <div className="productCategory">{product.category}</div>
         <div className="productPriceButton">
            <div className="productPrice">${product.price}</div>
            <div className="productButton" onClick={() => dispatch(productAction.addToOrderList(product))}>
               <img className="productButtonImg" src="/images/korzyna2.png" alt="korzyna2"/> Add to cart
            </div>
         </div>
      </div>
   );
};

export {ProductComponent};