Ось оновлена документація з інформацією про налаштування сховища та використання **AsyncThunk** для асинхронних запитів:

---

# Launch React-App

This app was created using [Create React App](https://github.com/facebook/create-react-app) and uses **Redux Toolkit** for state management.

## Steps for starting

### 1. Install dependencies
### `npm install`

### 2. Launch application in development mode
### `npm start`
Open [http://localhost:3000](http://localhost:3000) in your web browser.

## State Management

This project uses **Redux Toolkit** (`@reduxjs/toolkit`) for global state management.

### Store Configuration

The store is set up in `store.ts` as follows:

```ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
   reducer: {
      productReducer: productReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
```

### State Management Approach

- **AsyncThunk** is used for asynchronous API requests.
- **Regular reducers** are used for handling local state updates.