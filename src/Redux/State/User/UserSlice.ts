import { Users } from "@/Interfaces/Interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Users[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Users[]>) => {
      return action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
