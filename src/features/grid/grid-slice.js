import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loadingStates } from "../../helpers/loading-states";

export const getImagesMetadata = createAsyncThunk(
  "grid/getImagesMetadata",
  () => {
    return fetch(
      "//api.thecatapi.com/v1/images/search?limit=5"
    ).then((response) => response.json());
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
    [getImagesMetadata.fulfilled]: (state, { payload }) => {
      (state.status = loadingStates.loaded), (state.imagesMetadata = payload);
    },
    [getImagesMetadata.rejected]: (state) => {
      state.status = loadingStates.failed;
    },
  },
});

const { reducer } = gridSlice;
export default reducer;
