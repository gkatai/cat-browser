import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loadingStates } from "../../helpers/loading-states";

export const getImagesMetadata = createAsyncThunk(
  "grid/getImagesMetadata",
  async (count, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${count}`
      );
      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const gridSlice = createSlice({
  name: "grid",
  initialState: { status: loadingStates.idle },
  reducers: {},
  extraReducers: {
    [getImagesMetadata.pending]: (state) => {
      state.status = loadingStates.loading;
    },
    [getImagesMetadata.fulfilled]: (state, action) => {
      state.status = loadingStates.loaded;
      state.imagesMetadata = action.payload;
    },
    [getImagesMetadata.rejected]: (state) => {
      state.status = loadingStates.failed;
      state.errorMessage = "Error";
    },
  },
});

const { reducer } = gridSlice;
export default reducer;
