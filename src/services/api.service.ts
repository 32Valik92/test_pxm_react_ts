import axios from "axios";

import {IProductModel} from "../models";


const axiosInstance = axios.create({
   baseURL: "https://fakestoreapi.com/products/",
});

const urls = {
   get: "",
   categories: "categories",
   byCategory: (category: string) => `category/${category}`,
};

const productSrvice = {
   getAll: async ():Promise<IProductModel[]> => {
      const response = await axiosInstance.get<IProductModel[]>(urls.get);
      console.log(response.data);
      return response.data; 
   },

   getCategories: async ():Promise<string[]> => {
      const response = await axiosInstance.get<string[]>(urls.categories);
      console.log(response.data);
      return response.data;
   },

   getByCategory: async (category: string):Promise<IProductModel[]> => {
      const response = await axiosInstance.get<IProductModel[]>(urls.byCategory(category));
      console.log(response.data);
      return response.data;
   }
};

export {
   productSrvice,
};
