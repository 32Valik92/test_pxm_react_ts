import {AxiosError} from "axios";
import React, {ChangeEvent, FC, useEffect, useState} from "react";

import {IProductModel} from "../../models";
import {productSrvice} from "../../services";
import {ProductComponent} from "../Product/ProductComponent";

const ProductsComponent: FC = () => {
   const [products, setProducts] = useState<IProductModel[]>([]); // продукти
   const [categories, setCategories] = useState<string[]>([]); // категорії
   const [selectedCategory, setSelectedCategory] = useState<string>(""); // обрана категорія
   const [loading, setLoading] = useState<boolean>(true); // спінер

   // ф-ція для отримання по категорії
   const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const category = event.target.value; // значення категорії з option
      setSelectedCategory(category);
      setLoading(true);

      // або всі беремо або по категорії
      const fetchProducts = category === "all" ? productSrvice.getAll() : productSrvice.getByCategory(category);

      fetchProducts
         .then((response) => setProducts(response))
         .catch((e) => console.log(e))
         .finally(() => setLoading(false));
   };


   useEffect(() => {
      const fetchData = async (): Promise<void> => {
         try {
            const [categoriesResponse, productsResponse] = await Promise.all([
               productSrvice.getCategories(),
               productSrvice.getAll(),
            ]);

            setCategories(categoriesResponse);
            setProducts(productsResponse);
         } catch (e) {
            const axiosError = e as AxiosError;
            console.error("Помилка:", axiosError);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <div>
         <div className="categoryContainer">
            <select onChange={handleCategoryChange} value={selectedCategory}>
               <option value="all">Всі категорії</option>
               {categories.map(category =>
                  <option key={category} value={category}>
                     {category}
                  </option>
               )}
            </select>
         </div>

         {
            loading ?
               <div className="loader"></div>
               :
               <div className="products">
                  {products.map((product) => (
                     <ProductComponent key={product.id} product={product}/>
                  ))}
               </div>

         }
      </div>
   );

};

export {ProductsComponent};
