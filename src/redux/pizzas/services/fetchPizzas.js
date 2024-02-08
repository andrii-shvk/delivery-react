import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasLimit, getPizzasPage } from "../selectors/pizzasSelector";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const page = getPizzasPage(getState());
    const limit = getPizzasLimit(getState());

    try {
      const response = await $api.get(`/pizzas`, {
        params: {
          _limit: limit,
          _page: page
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue("Oops... Pizza's have not been received!");
    }
  }
);
