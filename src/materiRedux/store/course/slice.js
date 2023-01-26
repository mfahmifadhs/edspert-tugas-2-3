import { createSlice } from "@reduxjs/toolkit";
import * as courseAct from "./action";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      create: "",
      title: "",
      image: "",
      description: "",
      price: "",
    },
    error: null,
  },
  // reducers: {

  // },
  extraReducers: (builder) =>
    builder
      .addCase(courseAct.getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(courseAct.getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(courseAct.getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      }),
});

export default courseSlice.reducer;
