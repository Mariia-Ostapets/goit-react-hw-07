import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    nameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { nameFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
