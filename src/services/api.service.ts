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

const productService = {
   getAll: async (): Promise<IProductModel[]> => {
      const response = await axiosInstance.get<IProductModel[]>(urls.get);
      return response.data;
   },

   getByCategory: async (category: string): Promise<IProductModel[]> => {
      const response = await axiosInstance.get<IProductModel[]>(urls.byCategory(category));
      return response.data;
   }
};

const categoryService = {
   getAll: async (): Promise<string[]> => {
      const response = await axiosInstance.get<string[]>(urls.categories);
      return response.data;
   },
};

export {
   productService,
   categoryService
};
