import { configureStore } from "@reduxjs/toolkit";
import { Categories, Products, Users } from "@/Interfaces/Interfaces";
import { userSlice, productsSlice, categoriesSlice } from "..";

export interface AppStore {
  products: Products[];
  users: Users[];
  categories: Categories[];
}

export const store = configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer,
    users: userSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
