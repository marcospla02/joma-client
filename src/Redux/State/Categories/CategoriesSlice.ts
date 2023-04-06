import { Categories } from "@/Interfaces/Interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Categories[] = [];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Categories[]>) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
