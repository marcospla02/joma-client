import { configureStore } from "@reduxjs/toolkit";
import { Products, Users } from "@/Interfaces/Interfaces";
import { userSlice, productsSlice } from "..";

export interface AppStore {
  products: Products[];
  users: Users[];
}

export const store = configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer,
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
