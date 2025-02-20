import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IProductModel} from "../../models";
import {categoryService, productService} from "../../services";

interface IState {
    products: IProductModel[],
    orders: IProductModel[],
    categories: string[],
    loading: boolean,
    shoppingCardTriger: boolean,
}

const initialState: IState = {
   products: [],
   orders: [],
   categories: [],
   loading: true,
   shoppingCardTriger: false,
};

const getProducts = createAsyncThunk<IProductModel[], void>(
   "productSlice/getAll",
   async (_, {rejectWithValue}) => {
      try {
         return await productService.getAll();
      } catch (e) {
         const err = e as AxiosError;
         return rejectWithValue(err.response);
      }
   }
);

const getProductsByCategory = createAsyncThunk<IProductModel[], { category: string }>(
   "getProductsByCategory/getAll",
   async ({category}, {rejectWithValue}) => {
      try {
         return await productService.getByCategory(category);
      } catch (e) {
         const err = e as AxiosError;
         return rejectWithValue(err.response);
      }
   }
);

const getCategories = createAsyncThunk<string[], void>(
   "getCategories/getAll",
   async (_, {rejectWithValue}) => {
      try {
         return await categoryService.getAll();
      } catch (e) {
         const err = e as AxiosError;
         return rejectWithValue(err.response);
      }
   }
);

const slice = createSlice({
   name: "productSlice",
   initialState,
   reducers: {
      openCloseShoppingCart: state => {
         state.shoppingCardTriger = !state.shoppingCardTriger;
      },
      addToOrderList: (state, action) => {
         const haveToAdd = !state.orders.find(order => order.id === action.payload.id);
         if (haveToAdd) {
            state.orders.push(action.payload);
         }
      },
      deleteFromListOrder: (state, action) => {
         state.orders = state.orders.filter(order => order.id !== action.payload.id);
      },
      deleteAllFromListOrder: state => {
         state.orders = [];
      },

   },
   extraReducers: builder =>
      builder
         .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
         })
         .addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.products = action.payload;
         })
         .addMatcher(isPending(getProducts, getProducts, getProductsByCategory), state => {
            state.loading = true;
         })
         .addMatcher(isFulfilled(getProducts, getProductsByCategory), state => {
            state.loading = false;
         })
});

const {actions, reducer: productReducer} = slice;

const productAction = {
   ...actions,
   getProducts,
   getCategories,
   getProductsByCategory
};

export {
   productAction,
   productReducer
};