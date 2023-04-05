import { Dispatch } from "@reduxjs/toolkit";
import { dbJoma } from "./Db-peticion";
import { setProducts, setUsers } from "..";

export const getProductsDb = () => async (dispatch: Dispatch) => {
  const { data } = await dbJoma.get("/products");
  dispatch(setProducts(data));
};

export const getUsersDb = () => async (dispatch: Dispatch) => {
  const { data } = await dbJoma.get("/users");
  dispatch(setUsers(data));
};
