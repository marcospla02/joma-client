import { Products } from "@/Interfaces/Interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Products[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
