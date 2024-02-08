import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOthersHasMore,
  getOthersLoading,
  getOthersPage,
} from "../selectors/othersSelector";
import { othersAction } from "../slice/othersSlice";
import { fetchOthers } from "./fetchOthers";

export const fetchNextOthersPage = createAsyncThunk(
  "others/fetchNextOthersPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getOthersPage(getState());
    const hasMore = getOthersHasMore(getState());
    const loading = getOthersLoading(getState());

    if (hasMore && !loading) {
      dispatch(othersAction.setPage(page + 1));
      dispatch(fetchOthers());
    }
  }
);