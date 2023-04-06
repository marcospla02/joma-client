import { Dispatch } from "@reduxjs/toolkit";
import { dbJoma } from "./Db-peticion";
import { setCategories, setProducts, setUsers } from "..";

export const getProductsDb = () => async (dispatch: Dispatch) => {
  const { data } = await dbJoma.get("/products");
  dispatch(setProducts(data));
};

// export const getProductsByQuery = () => async (dispatch: Dispatch) => {

// }

export const getUsersDb = () => async (dispatch: Dispatch) => {
  const { data } = await dbJoma.get("/users");
  dispatch(setUsers(data));
};

export const getCategoriesDb = () => async (dispatch: Dispatch) => {
  const { data } = await dbJoma.get("/category");
  dispatch(setCategories(data));
};
