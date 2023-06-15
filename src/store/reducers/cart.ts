import { createSlice } from '@reduxjs/toolkit';
import {Model} from "../../model/Model";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Model[],
  reducers: {
    addItemToCart: (state, action) => {
      state = [...state, action.payload];
    },
    removeItemFromCart: (state, action) =>{
      state = state.filter((product) => product.id !== action.payload.id)
    }
  }
});

export default cartSlice.reducer
